"use client";
import { useState, useCallback } from "react";
import { useActiveLink } from "@/context/ActiveLinkContext";

interface VideoPlayerType {
  imdb_id: number | string;
  title?: string;
}

interface SeriesPlayer extends VideoPlayerType {
  episode?: number | string;
  season: number | string;
}

type SpanishState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ready"; url: string }
  | { status: "error" };

function LangToggle({
  lang,
  loading,
  onChange,
}: {
  lang: "en" | "es";
  loading: boolean;
  onChange: (l: "en" | "es") => void;
}) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <button
        onClick={() => onChange("en")}
        className={`px-3 py-1 rounded-lg text-sm font-semibold transition ${
          lang === "en"
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onChange("es")}
        disabled={loading}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-semibold transition disabled:opacity-60 ${
          lang === "es"
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
      >
        ES
        {loading && (
          <span className="inline-block w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
      </button>
    </div>
  );
}

export const VideoPlayer = ({ imdb_id, title }: VideoPlayerType) => {
  const { activeLink, spanishLink } = useActiveLink();
  const [lang, setLang] = useState<"en" | "es">("en");
  const [spanish, setSpanish] = useState<SpanishState>({ status: "idle" });

  const handleLangChange = useCallback(
    async (l: "en" | "es") => {
      setLang(l);
      if (l !== "es") return;

      // Already have a static admin-configured Spanish URL
      if (spanishLink) return;

      // Already fetched or loading
      if (spanish.status === "ready" || spanish.status === "loading") return;

      setSpanish({ status: "loading" });
      try {
        const res = await fetch(
          `/api/spanish-embed?title=${encodeURIComponent(title ?? String(imdb_id))}`
        );
        const data = await res.json();
        if (data.url) {
          setSpanish({ status: "ready", url: data.url });
        } else {
          setSpanish({ status: "error" });
        }
      } catch {
        setSpanish({ status: "error" });
      }
    },
    [spanishLink, spanish.status, title, imdb_id]
  );

  const getEmbedUrl = () => {
    if (lang === "es") {
      if (spanishLink) return `${spanishLink}/embed/movie/${imdb_id}`;
      if (spanish.status === "ready") return spanish.url;
      return null;
    }
    return `${activeLink}/embed/movie/${imdb_id}`;
  };

  const embedUrl = getEmbedUrl();

  return (
    <div className="flex flex-col w-full lg:flex-grow">
      <LangToggle
        lang={lang}
        loading={spanish.status === "loading"}
        onChange={handleLangChange}
      />

      {lang === "es" && spanish.status === "error" && (
        <div className="w-full h-96 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 text-sm">
          Spanish version not available for this title.
        </div>
      )}

      {lang === "es" && spanish.status === "loading" && (
        <div className="w-full h-96 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 text-sm">
          Loading Spanish version…
        </div>
      )}

      {embedUrl && (
        <iframe
          key={embedUrl}
          title={title}
          className="w-full lg:flex-grow lg:h-auto h-96 rounded-lg"
          src={embedUrl}
          allowFullScreen
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="origin"
        />
      )}
    </div>
  );
};

export const SeriesVideoPlayer = ({
  imdb_id,
  title,
  episode = 1,
  season = 1,
}: SeriesPlayer) => {
  const { activeLink, spanishLink } = useActiveLink();
  const [lang, setLang] = useState<"en" | "es">("en");
  const [spanish, setSpanish] = useState<SpanishState>({ status: "idle" });

  const handleLangChange = useCallback(
    async (l: "en" | "es") => {
      setLang(l);
      if (l !== "es") return;

      if (spanishLink) return;
      if (spanish.status === "ready" || spanish.status === "loading") return;

      setSpanish({ status: "loading" });
      try {
        const res = await fetch(
          `/api/spanish-embed?title=${encodeURIComponent(title ?? String(imdb_id))}`
        );
        const data = await res.json();
        if (data.url) {
          setSpanish({ status: "ready", url: data.url });
        } else {
          setSpanish({ status: "error" });
        }
      } catch {
        setSpanish({ status: "error" });
      }
    },
    [spanishLink, spanish.status, title, imdb_id]
  );

  const getEmbedUrl = () => {
    if (lang === "es") {
      if (spanishLink)
        return `${spanishLink}/embed/tv?tmdb=${imdb_id}&season=${season}&episode=${episode}`;
      if (spanish.status === "ready") return spanish.url;
      return null;
    }
    return `${activeLink}/embed/tv?tmdb=${imdb_id}&season=${season}&episode=${episode}`;
  };

  const embedUrl = getEmbedUrl();

  return (
    <div className="flex flex-col w-full h-full">
      <LangToggle
        lang={lang}
        loading={spanish.status === "loading"}
        onChange={handleLangChange}
      />

      {lang === "es" && spanish.status === "error" && (
        <div className="w-full h-96 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 text-sm">
          Spanish version not available for this title.
        </div>
      )}

      {lang === "es" && spanish.status === "loading" && (
        <div className="w-full h-96 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 text-sm">
          Loading Spanish version…
        </div>
      )}

      {embedUrl && (
        <iframe
          key={embedUrl}
          title={title}
          className="w-full h-full rounded-lg"
          src={embedUrl}
          allowFullScreen
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="origin"
        />
      )}
    </div>
  );
};

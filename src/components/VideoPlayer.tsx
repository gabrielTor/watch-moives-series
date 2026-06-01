"use client";
import { useState } from "react";
import { useActiveLink } from "@/context/ActiveLinkContext";

interface VideoPlayerType {
  imdb_id: number | string;
  title?: string;
}

interface SeriesPlayer extends VideoPlayerType {
  episode?: number | string;
  season: number | string;
}

function LangToggle({
  lang,
  hasSpanish,
  onChange,
}: {
  lang: "en" | "es";
  hasSpanish: boolean;
  onChange: (l: "en" | "es") => void;
}) {
  if (!hasSpanish) return null;

  return (
    <div className="flex gap-2 mb-2">
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
        className={`px-3 py-1 rounded-lg text-sm font-semibold transition ${
          lang === "es"
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
      >
        ES
      </button>
    </div>
  );
}

export const VideoPlayer = ({ imdb_id, title }: VideoPlayerType) => {
  const { activeLink, spanishLink } = useActiveLink();
  const [lang, setLang] = useState<"en" | "es">("en");

  const base = lang === "es" && spanishLink ? spanishLink : activeLink;
  const embedUrl = `${base}/embed/movie/${imdb_id}`;

  return (
    <div className="flex flex-col w-full lg:flex-grow">
      <LangToggle
        lang={lang}
        hasSpanish={!!spanishLink}
        onChange={setLang}
      />
      <iframe
        key={embedUrl}
        title={title}
        className="w-full lg:flex-grow lg:h-auto h-96 rounded-lg"
        src={embedUrl}
        allowFullScreen
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="origin"
      />
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

  const base = lang === "es" && spanishLink ? spanishLink : activeLink;
  const embedUrl = `${base}/embed/tv?tmdb=${imdb_id}&season=${season}&episode=${episode}`;

  return (
    <div className="flex flex-col w-full h-full">
      <LangToggle
        lang={lang}
        hasSpanish={!!spanishLink}
        onChange={setLang}
      />
      <iframe
        key={embedUrl}
        title={title}
        className="w-full h-full rounded-lg"
        src={embedUrl}
        allowFullScreen
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="origin"
      />
    </div>
  );
};

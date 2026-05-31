import getSrc from "@/utils/getFullImgSrc";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaStar, FaInfoCircle } from "react-icons/fa";

interface Props {
  item: MovieResults;
  path?: string;
}

export default function HeroSection({ item, path = "movie" }: Readonly<Props>) {
  const title = item.title ?? item.name ?? "";

  return (
    <div className="relative h-[58vh] md:h-[72vh] overflow-hidden">
      {/* Backdrop image */}
      <Image
        src={getSrc(item.backdrop_path || item.poster_path)}
        alt={title}
        fill
        priority
        className="object-cover object-top"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/55 to-gray-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-8xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            {/* Featured badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-liteBlue/20 border border-liteBlue/40 text-liteBlue text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-liteBlue animate-pulse" />
                Featured
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-3 drop-shadow-lg">
              {title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1.5">
                <FaStar className="text-yellow-400 text-sm" />
                <span className="text-white font-bold text-sm">
                  {item.vote_average.toFixed(1)}
                </span>
                <span className="text-gray-400 text-xs">/ 10</span>
              </div>
              <span className="w-px h-4 bg-gray-600" />
              <span className="text-gray-400 text-sm">
                {item.vote_count.toLocaleString()} votes
              </span>
            </div>

            {/* Overview */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
              {item.overview}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href={`/${path}/${item.id}`}
                className="flex items-center gap-2 bg-liteBlue hover:bg-liteBlue/90 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-liteBlue/30 hover:shadow-liteBlue/50 hover:-translate-y-0.5"
              >
                <FaPlay className="text-xs" />
                Watch Now
              </Link>
              <Link
                href={`/${path}/${item.id}`}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 border border-white/20 hover:-translate-y-0.5"
              >
                <FaInfoCircle className="text-sm" />
                More Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { FaCalendar, FaClock } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

interface SeriesDetailsGridProps {
  tvShow?: TVShow;
}

export function SeriesDetailsGrid({ tvShow }: SeriesDetailsGridProps) {
  if (!tvShow) {
    return null;
  }

  const formatDate = (value?: string | null) => {
    if (!value) return "";
    return new Date(value).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <FaCalendar className="w-5 h-5" />
          <span className="font-semibold">First Aired</span>
        </div>
        <p className="text-xl">{formatDate(tvShow.first_air_date)}</p>
      </div>

      {tvShow.last_air_date && (
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <FaCalendar className="w-5 h-5" />
            <span className="font-semibold">Last Aired</span>
          </div>
          <p className="text-xl">{formatDate(tvShow.last_air_date)}</p>
        </div>
      )}

      {tvShow.episode_run_time?.length > 0 && (
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <FaClock className="w-5 h-5" />
            <span className="font-semibold">Episode Runtime</span>
          </div>
          <p className="text-xl">{tvShow.episode_run_time.join(", ")} min</p>
        </div>
      )}

      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <FiTrendingUp className="w-5 h-5" />
          <span className="font-semibold">Popularity</span>
        </div>
        <p className="text-xl">{tvShow.popularity.toFixed(0)}</p>
      </div>

      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <span className="font-semibold">Type</span>
        </div>
        <p className="text-xl">{tvShow.type}</p>
      </div>

      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <span className="font-semibold">Original Language</span>
        </div>
        <p className="text-xl uppercase">{tvShow.original_language}</p>
      </div>
    </section>
  );
}

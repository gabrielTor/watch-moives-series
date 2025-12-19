import { FaStar, FaCalendar } from "react-icons/fa";

interface SeasonHeaderProps {
  seasonData: SeasonResponse;
}

export function SeasonHeader({ seasonData }: SeasonHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-2">{seasonData?.name}</h1>
      {seasonData?.overview && (
        <p className="text-gray-400 max-w-3xl">{seasonData?.overview}</p>
      )}
      <div className="flex items-center gap-4 mt-3 text-sm">
        {seasonData?.air_date && (
          <div className="flex items-center gap-1 text-gray-400">
            <FaCalendar />
            <span>{new Date(seasonData?.air_date).getFullYear()}</span>
          </div>
        )}
        <span className="text-gray-500">•</span>
        <span className="text-gray-400">
          {seasonData?.episodes.length} Episodes
        </span>
        {seasonData?.vote_average && seasonData.vote_average > 0 && (
          <>
            <span className="text-gray-500">•</span>
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar />
              <span>{seasonData.vote_average.toFixed(1)}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

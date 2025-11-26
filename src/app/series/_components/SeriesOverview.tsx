interface SeriesOverviewProps {
  overview?: string;
}

export function SeriesOverview({ overview }: SeriesOverviewProps) {
  if (!overview) return null;

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Overview</h2>
      <p className="text-gray-300 text-lg leading-relaxed">{overview}</p>
    </section>
  );
}

interface SeriesAdditionalInfoProps {
  tvShow?: TVShow;
}

export function SeriesAdditionalInfo({ tvShow }: SeriesAdditionalInfoProps) {
  if (!tvShow) {
    return null;
  }

  const countries =
    tvShow.production_countries?.map((country) => country.name).join(", ") ??
    "";

  const languages =
    tvShow.spoken_languages
      ?.map((language) => language.english_name)
      .join(", ") ?? "";

  return (
    <section className="bg-gray-900 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-gray-400 mb-2">Original Title</h3>
          <p>{tvShow.original_name}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-400 mb-2">
            Production Status
          </h3>
          <p>{tvShow.in_production ? "In Production" : "Completed"}</p>
        </div>
        {tvShow.production_countries?.length > 0 && (
          <div>
            <h3 className="font-semibold text-gray-400 mb-2">Countries</h3>
            <p>{countries}</p>
          </div>
        )}
        {tvShow.spoken_languages?.length > 0 && (
          <div>
            <h3 className="font-semibold text-gray-400 mb-2">Languages</h3>
            <p>{languages}</p>
          </div>
        )}
      </div>
    </section>
  );
}

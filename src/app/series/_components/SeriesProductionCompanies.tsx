import Image from "next/image";

interface SeriesProductionCompaniesProps {
  companies?: ProductionCompany[];
  imageBase: string;
}

export function SeriesProductionCompanies({
  companies,
  imageBase,
}: SeriesProductionCompaniesProps) {
  if (!companies || companies.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Production Companies</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center"
          >
            {company.logo_path && (
              <div className="relative w-32 h-16 mb-4">
                <Image
                  src={`${imageBase}w185${company.logo_path}`}
                  alt={company.name}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <p className="font-semibold">{company.name}</p>
            <p className="text-gray-400 text-sm">{company.origin_country}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

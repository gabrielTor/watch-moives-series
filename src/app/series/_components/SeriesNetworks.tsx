import Image from "next/image";

interface SeriesNetworksProps {
  networks?: ProductionCompany[];
  imageBase: string;
}

export function SeriesNetworks({ networks, imageBase }: SeriesNetworksProps) {
  if (!networks || networks.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Networks</h2>
      <div className="flex flex-wrap gap-6">
        {networks.map((network) => (
          <div
            key={network.id}
            className="bg-gray-900 rounded-lg p-6 flex items-center gap-4"
          >
            {network.logo_path && (
              <div className="relative w-24 h-12">
                <Image
                  src={`${imageBase}w185${network.logo_path}`}
                  alt={network.name}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div>
              <p className="font-semibold">{network.name}</p>
              <p className="text-gray-400 text-sm">{network.origin_country}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

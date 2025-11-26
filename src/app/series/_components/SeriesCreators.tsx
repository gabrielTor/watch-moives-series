import Image from "next/image";

interface SeriesCreatorsProps {
  creators?: Person[];
  imageBase: string;
}

export function SeriesCreators({ creators, imageBase }: SeriesCreatorsProps) {
  if (!creators || creators.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Created By</h2>
      <div className="flex flex-wrap gap-6">
        {creators.map((creator) => (
          <div key={creator.id} className="flex items-center gap-4">
            {creator.profile_path ? (
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={`${imageBase}w185${creator.profile_path}`}
                  alt={creator.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-2xl font-bold">
                  {creator.name.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <p className="font-semibold text-lg">{creator.name}</p>
              <p className="text-gray-400 text-sm">Creator</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

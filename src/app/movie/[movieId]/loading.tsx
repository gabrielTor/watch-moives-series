const mockUpLoadingText = [
  { className: "w-[10%] h-5 rounded animate-pulse bg-navy", key: 123 },
  { className: "w-full h-5 rounded animate-pulse bg-navy", key: 456 },
  { className: "w-[10%] h-5 rounded animate-pulse bg-navy", key: 789 },
  { className: "w-[20%] h-5 rounded animate-pulse bg-navy", key: 101123 },
  { className: "w-[15%] h-5 rounded animate-pulse bg-navy", key: 456789 },
  {
    className:
      "w-full mt-4 md:flex-grow md:h-auto h-96 rounded animate-pulse bg-navy",
    key: 8949,
  },
];

export default function Loading() {
  return (
    <div className="p-4">
      <div className="animate-pulse w-full md:w-1/3 h-5 mb-2 bg-navy rounded" />
      <div className="flex flex-wrap">
        <span className=" md:w-1/3 animate-pulse w-full h-[50dvh] md:h-[80dvh] bg-navy rounded" />
        <div className="w-full md:w-2/3 md:pl-4 flex flex-col gap-4 mt-4 md:mt-0">
          {mockUpLoadingText.map((line) => (
            <p className={line.className} key={line.key} />
          ))}
        </div>
      </div>
    </div>
  );
}

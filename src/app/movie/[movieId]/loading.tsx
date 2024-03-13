const mockUpLoadingText = [
  { className: "w-full h-5 rounded", key: 123 },
  { className: "w-full h-5 rounded", key: 456 },
  { className: "w-full h-5 rounded", key: 789 },
  { className: "w-full h-5 rounded", key: 101123 },
  { className: "w-full h-5 rounded", key: 456789 },
];

export default function Loading() {
  return (
    <>
      <h2 className="animate-pulse w-full h-5 mb-2" />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3">
          <span className="animate-pulse w-full h-[1000px] bg-navy" />
        </div>
        <div className="w-full md:w-2/3 md:pl-4 flex flex-col">
          {mockUpLoadingText.map((line) => (
            <p className={line.className} key={line.key} />
          ))}
          <span className="animate-pulse h-[1000px]" />
        </div>
      </div>
    </>
  );
}

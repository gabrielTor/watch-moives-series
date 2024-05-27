export default function Loading() {
  return (
    <section className="p-4 max-w-8xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 20 }, (_, index) => (
          <span
            key={index}
            className="h-80 shadow-md animate-pulse bg-navy rounded-lg"
          />
        ))}
      </div>
    </section>
  );
}

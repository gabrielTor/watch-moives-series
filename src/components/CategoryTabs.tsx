import Link from "next/link";

const categories = [
  { label: "Trending", value: "" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Top Rated", value: "top_rated" },
];

interface Props {
  currentType?: string;
}

export default function CategoryTabs({ currentType = "" }: Readonly<Props>) {
  return (
    <div className="flex items-center gap-2 mb-8 flex-wrap">
      {categories.map((cat) => {
        const isActive = (currentType ?? "") === cat.value;
        const href = cat.value ? `/?type=${cat.value}` : "/";

        return (
          <Link
            key={cat.value}
            href={href}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
              isActive
                ? "bg-liteBlue text-white border-liteBlue shadow-lg shadow-liteBlue/30"
                : "bg-gray-800/50 text-gray-400 border-gray-700 hover:bg-gray-700 hover:text-white hover:border-gray-600"
            }`}
          >
            {cat.label}
          </Link>
        );
      })}
    </div>
  );
}

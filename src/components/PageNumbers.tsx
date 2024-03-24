"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  amountOfPages: number;
  currentPage: number;
}
const maxVisiblePages = 5;
const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

export default function PageNumbers({
  amountOfPages,
  currentPage,
}: Readonly<Props>) {
  const { push } = useRouter();
  const { get } = useSearchParams();
  if (!amountOfPages) return null;

  const startPage = Math.max(1, currentPage - halfMaxVisiblePages);
  const endPage = Math.min(startPage + maxVisiblePages - 1, amountOfPages);

  const navigateToPage = (pageNumber: number) => {
    const search = get("search");
    const type = get("type");
    if (search) return push(`/results?page=${pageNumber}&search=${search}`);
    else if (type) return push(`/?page=${pageNumber}&type=${type}`);
    push(`/?page=${pageNumber}`);
  };

  const nextPage = () => {
    if (currentPage !== amountOfPages) {
      navigateToPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      navigateToPage(currentPage - 1);
    }
  };

  return (
    <span className="flex lg:gap-2 justify-center text-lg font-medium mt-4">
      <button
        onClick={prevPage}
        aria-label="previous"
        className="rounded-full px-4 py-1 lg:px-5 lg:py-2 hover:bg-aqua"
      >
        &lt;
      </button>
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
        <button
          onClick={() => navigateToPage(startPage + index)}
          key={startPage + index}
          aria-label="pagination"
          className={`${
            currentPage === startPage + index
              ? "bg-navy text-white"
              : "hover:bg-aqua"
          } rounded-full px-4 py-1 lg:px-5 lg:py-2`}
        >
          {startPage + index}
        </button>
      ))}
      <button
        onClick={nextPage}
        aria-label="next"
        className="rounded-full px-4 py-1 lg:px-5 lg:py-2 hover:bg-aqua"
      >
        &gt;
      </button>
    </span>
  );
}

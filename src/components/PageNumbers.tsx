"use client";

import { useRouter } from "next/navigation";

interface Props {
  amountOfPages: number;
  currentPage: number;
}

export default function PageNumbers({ amountOfPages, currentPage }: Props) {
  const { push } = useRouter();
  if (!amountOfPages) return null;

  const maxVisiblePages = 5;
  const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

  const startPage = Math.max(1, currentPage - halfMaxVisiblePages);
  const endPage = Math.min(startPage + maxVisiblePages - 1, amountOfPages);

  const navigateToPage = (pageNumber: number) => {
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
    <span className="flex lg:gap-2 justify-center text-sm lg:text-lg font-medium mt-4">
      <button
        onClick={prevPage}
        aria-label="previous"
        className="rounded-full px-3 py-1 lg:px-5 lg:py-2 hover:bg-gray-200 hover:bg-opacity-50"
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
          } rounded-full px-3 py-1 lg:px-5 lg:py-2`}
        >
          {startPage + index}
        </button>
      ))}
      <button
        onClick={nextPage}
        aria-label="next"
        className="rounded-full px-3 py-1 lg:px-5 lg:py-2 hover:bg-gray-200 hover:bg-opacity-50"
      >
        &gt;
      </button>
    </span>
  );
}

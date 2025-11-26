"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  const pathname = usePathname();
  if (!amountOfPages) return null;

  const startPage = Math.max(1, currentPage - halfMaxVisiblePages);
  const endPage = Math.min(startPage + maxVisiblePages - 1, amountOfPages);

  const navigateToPage = (pageNumber: number) => {
    const search = get("search");
    const type = get("type");
    if (search) return push(`${pathname}?page=${pageNumber}&search=${search}`);
    else if (type) return push(`${pathname}?page=${pageNumber}&type=${type}`);
    push(`${pathname}?page=${pageNumber}`);
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
    <div className="flex items-center justify-center gap-2 mt-8 mb-4">
      {/* Previous Button */}
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        aria-label="previous page"
        className={`
          flex items-center justify-center w-10 h-10 rounded-lg
          transition-all duration-200
          ${
            currentPage === 1
              ? "bg-gray-800 text-gray-600 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-gray-700 hover:scale-105"
          }
        `}
      >
        <FaChevronLeft className="text-sm" />
      </button>

      {/* First page + ellipsis if needed */}
      {startPage > 1 && (
        <>
          <button
            onClick={() => navigateToPage(1)}
            aria-label="page 1"
            className="flex items-center justify-center min-w-10 h-10 px-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-200"
          >
            1
          </button>
          {startPage > 2 && (
            <span className="flex items-center justify-center w-10 h-10 text-gray-500">
              ...
            </span>
          )}
        </>
      )}

      {/* Page Numbers */}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const pageNum = startPage + index;
        const isActive = currentPage === pageNum;

        return (
          <button
            onClick={() => navigateToPage(pageNum)}
            key={pageNum}
            aria-label={`page ${pageNum}`}
            aria-current={isActive ? "page" : undefined}
            className={`
              flex items-center justify-center min-w-10 h-10 px-3 rounded-lg
              font-semibold transition-all duration-200
              ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50 scale-110"
                  : "bg-gray-800 text-white hover:bg-gray-700 hover:scale-105"
              }
            `}
          >
            {pageNum}
          </button>
        );
      })}

      {/* Last page + ellipsis if needed */}
      {endPage < amountOfPages && (
        <>
          {endPage < amountOfPages - 1 && (
            <span className="flex items-center justify-center w-10 h-10 text-gray-500">
              ...
            </span>
          )}
          <button
            onClick={() => navigateToPage(amountOfPages)}
            aria-label={`page ${amountOfPages}`}
            className="flex items-center justify-center min-w-10 h-10 px-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-200"
          >
            {amountOfPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={nextPage}
        disabled={currentPage === amountOfPages}
        aria-label="next page"
        className={`
          flex items-center justify-center w-10 h-10 rounded-lg
          transition-all duration-200
          ${
            currentPage === amountOfPages
              ? "bg-gray-800 text-gray-600 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-gray-700 hover:scale-105"
          }
        `}
      >
        <FaChevronRight className="text-sm" />
      </button>

      {/* Page Info */}
      <div className="ml-4 text-sm text-gray-400 hidden sm:block">
        Page <span className="font-semibold text-white">{currentPage}</span> of{" "}
        <span className="font-semibold text-white">{amountOfPages}</span>
      </div>
    </div>
  );
}

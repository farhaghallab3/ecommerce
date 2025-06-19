// src/components/molecules/Pagination.tsx
import { Fragment, type FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  // Optional props for styling or behavior
  maxPageNumbersToShow?: number; // How many page numbers (e.g., 1, 2, 3) to show at once
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxPageNumbersToShow = 5,
}) => {
  if (totalPages <= 1) {
    return null; // Don't render pagination if there's only one page or less
  }

  const pages: (number | '...')[] = [];
  const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) {
      pages.push('...');
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push('...');
    }
    pages.push(totalPages);
  }

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => (
        <Fragment key={index}>
          {page === '...' ? (
            <span className="px-3 py-2 text-gray-700">...</span>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={`
                px-3 py-2 rounded-md transition-colors
                ${currentPage === page
                  ? 'bg-emerald-500 text-white font-semibold' // Active page style
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200' // Inactive page style
                }
              `}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )}
        </Fragment>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
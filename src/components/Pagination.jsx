const Pagination = ({ currentPage, totalPages, onPrev, onNext }) => {
  return (
    <div className="flex justify-between items-center px-6 py-6 mt-4">
      <button
        onClick={onPrev}
        disabled={currentPage <= 1}
        className="px-5 py-2 bg-gray-700 text-white text-sm font-semibold rounded disabled:opacity-40 hover:bg-gray-600 transition-colors"
      >
        PREV
      </button>
      <button
        onClick={onNext}
        disabled={currentPage >= totalPages}
        className="px-5 py-2 bg-gray-700 text-white text-sm font-semibold rounded disabled:opacity-40 hover:bg-gray-600 transition-colors"
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;

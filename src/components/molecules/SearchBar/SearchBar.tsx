export const SearchBar = () => (
  <form className="flex flex-1 max-w-2xl mx-6">
    <input
      type="text"
      placeholder="Search"
      className="
        flex-1 px-4 py-2
        border border-gray-400
        border-r-0
        rounded-l-[18px]
        rounded-r-none
        bg-transparent
        outline-none
        placeholder-gray-400
        text-base
      "
    />
    <button
      type="submit"
      className="
        px-4 py-2
        border border-gray-400
        border-l-0
        rounded-r-[18px]
        rounded-l-none
        bg-transparent
        flex items-center
        text-lg
        text-gray-800
        hover:text-[#39d6ac]
      "
      aria-label="Search"
    >
      {/* Search Icon SVG */}
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    </button>
  </form>
);

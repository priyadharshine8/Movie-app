const SearchBar = ({ value, onChange, placeholder = 'Search Movies...' }) => {
  return (
    <div className="flex justify-center px-6 py-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full max-w-2xl px-4 py-2 rounded border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
      />
    </div>
  );
};

export default SearchBar;

const GENRES = [
  { id: 0, name: 'All Genres' },
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Love' },
];

const GenreFilter = ({ selectedGenre, onChange }) => {
  return (
    <div className="flex justify-center px-6 py-2">
      <select
        value={selectedGenre}
        onChange={(e) => onChange(Number(e.target.value))}
        className="px-4 py-2 border border-gray-300 bg-white text-gray-700 text-sm rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        {GENRES.map((g) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;

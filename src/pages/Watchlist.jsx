import { useState, useMemo } from 'react';
import { useWatchlist } from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import GenreFilter from '../components/GenreFilter';

const Watchlist = () => {
  const { watchlist } = useWatchlist();
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState(0);

  const filtered = useMemo(() => {
    let list = watchlist;
    if (search.trim()) {
      list = list.filter((m) =>
        m.title.toLowerCase().includes(search.trim().toLowerCase())
      );
    }
    if (selectedGenre !== 0) {
      list = list.filter((m) =>
        m.genre_ids && m.genre_ids.includes(selectedGenre)
      );
    }
    return list;
  }, [watchlist, search, selectedGenre]);

  return (
    <div className="min-h-screen bg-gray-100">
      <SearchBar value={search} onChange={setSearch} />
      <GenreFilter selectedGenre={selectedGenre} onChange={setSelectedGenre} />

      {watchlist.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          Your watchlist is empty. Add some movies!
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No movies match your filter.
        </div>
      ) : (
        <div className="px-6 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;

import { useState, useEffect, useCallback } from 'react';
import { getPopularMovies, searchMovies } from '../services/tmdb';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      let res;
      if (search.trim()) {
        res = await searchMovies(search.trim(), page);
      } else {
        res = await getPopularMovies(page);
      }
      setMovies(res.data.results || []);
      setTotalPages(Math.min(res.data.total_pages || 1, 500));
    } catch (err) {
      setError('Failed to load movies. Check your API key or internet connection.');
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="min-h-screen bg-gray-100">
      <SearchBar value={search} onChange={setSearch} />

      {loading && (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-gray-400 border-t-gray-700 rounded-full animate-spin" />
        </div>
      )}

      {error && (
        <div className="text-center py-10 text-red-500 font-medium">{error}</div>
      )}

      {!loading && !error && movies.length === 0 && (
        <div className="text-center py-20 text-gray-500">No movies found.</div>
      )}

      {!loading && !error && movies.length > 0 && (
        <>
          <div className="px-6 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPrev={() => setPage((p) => Math.max(1, p - 1))}
            onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
          />
        </>
      )}
    </div>
  );
};

export default Home;

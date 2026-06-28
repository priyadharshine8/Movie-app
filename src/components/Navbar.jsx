import { Link, useLocation } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';

const Navbar = () => {
  const { watchlist } = useWatchlist();
  const location = useLocation();

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link
        to="/"
        className="text-xl font-semibold text-white hover:text-gray-200 transition-colors"
      >
        Movie App
      </Link>
      <Link
        to="/watchlist"
        className="text-base font-medium text-white hover:text-gray-200 transition-colors"
      >
        Watchlist({watchlist.length})
      </Link>
    </nav>
  );
};

export default Navbar;

import { useWatchlist } from '../context/WatchlistContext';

const COLORS = [
  ['#1a1a2e', '#e94560'], ['#16213e', '#0f3460'],
  ['#533483', '#e94560'], ['#2d132c', '#ee4540'],
  ['#1b262c', '#0f3460'], ['#0a3d62', '#60a3bc'],
  ['#1e272e', '#d2dae2'], ['#6a0572', '#ab83a1'],
];

const FallbackPoster = ({ title, id }) => {
  const [bg, accent] = COLORS[id % COLORS.length];
  const initials = title.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${bg}, ${accent})` }}>
      <div className="text-white text-4xl font-bold opacity-80">{initials}</div>
      <div className="text-white text-xs mt-2 px-2 text-center opacity-60 leading-tight">{title}</div>
    </div>
  );
};

const MovieCard = ({ movie }) => {
  const { isInWatchlist, toggleWatchlist } = useWatchlist();
  const inList = isInWatchlist(movie.id);

  // poster_path can be a full URL or a TMDB path
  const posterUrl = movie.poster_path
    ? (movie.poster_path.startsWith('http')
        ? movie.poster_path
        : `https://image.tmdb.org/t/p/w500${movie.poster_path}`)
    : null;

  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-[1.02] transition-transform duration-200">
      <button
        onClick={(e) => { e.stopPropagation(); toggleWatchlist(movie); }}
        className="absolute top-2 right-2 z-10 p-1 rounded-full hover:scale-110 transition-transform duration-150"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill={inList ? '#ef4444' : 'none'} stroke="#ef4444" strokeWidth="2" className="w-6 h-6 drop-shadow">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>

      <div className="w-full aspect-[2/3] overflow-hidden">
        {posterUrl ? (
          <img src={posterUrl} alt={movie.title}
            className="w-full h-full object-cover" loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
          />
        ) : null}
        <div style={{ display: posterUrl ? 'none' : 'flex' }} className="w-full h-full">
          <FallbackPoster title={movie.title} id={movie.id} />
        </div>
      </div>

      <div className="p-3">
        <h3 className="text-white font-semibold text-sm truncate">{movie.title}</h3>
        <p className="text-gray-400 text-xs mt-1">{movie.release_date || 'N/A'}</p>
      </div>
    </div>
  );
};

export default MovieCard;

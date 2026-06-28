import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WatchlistProvider } from './context/WatchlistContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <BrowserRouter>
      <WatchlistProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </div>
      </WatchlistProvider>
    </BrowserRouter>
  );
}

export default App;

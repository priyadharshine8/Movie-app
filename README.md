# Movie App

A React movie browsing app powered by TMDB API.

## Setup

### 1. Get TMDB API Key
- Visit https://www.themoviedb.org/
- Sign up / Log in → Settings → API → Create API key (Developer)
- Copy your **API Key (v3 auth)**

### 2. Configure Environment
```bash
cp .env.example .env
```
Open `.env` and replace `your_tmdb_api_key_here` with your real key:
```
VITE_TMDB_API_KEY=abc123yourkeyhere
```

### 3. Install & Run
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build for Production
```bash
npm run build
npm run preview
```

## Features
- Browse popular movies (TMDB API)
- Search movies in real-time
- Add/remove from watchlist (heart icon)
- Watchlist persists via localStorage
- Genre filter on Watchlist page
- Pagination (PREV / NEXT)
- Responsive grid layout

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── MovieCard.jsx
│   ├── SearchBar.jsx
│   ├── Pagination.jsx
│   └── GenreFilter.jsx
├── pages/
│   ├── Home.jsx
│   └── Watchlist.jsx
├── context/
│   └── WatchlistContext.jsx
├── services/
│   └── tmdb.js
├── App.jsx
└── main.jsx
```

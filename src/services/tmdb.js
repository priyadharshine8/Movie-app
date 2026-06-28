const MOCK_MOVIES = [
  { id: 1, title: "raanjhanaa", release_date: "2013-06-21", genre_ids: [37, 18], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4Ji4bkj-6k2-8ZjgRlqZfJSgzzbsTK3rjw_-50IW0A&s=10" },
  { id: 2, title: "vinnaithandi varuvaya", release_date: "2010-02-26", genre_ids: [18, 37 ,10751], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PaZcLyr1W5-EVxjKwVo6oCxC6eTOG9wtPnY6rLL8dQ&s=10" },
  { id: 3, title: "3", release_date: "2012-03-30", genre_ids: [10749, 37], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07TWjhqrEwZ3gvtBYNeAxRqDu6_zVICcqOJTDXZHx5Q&s=10" },
  { id: 4, title: "needhane enthan ponvasantham", release_date: "2012-12-14", genre_ids: [ 10749,37,], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCTvk9gIyqvOxtyWUtsndSfsfg-3ts8FNWa2sfpv9NA&s=10" },
  { id: 5, title: "alaipayuthey", release_date: "2000-04-14", genre_ids: [10749,10751,37, 18], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Vxs-mdHDBZJ4Q-A57H64FAW8n6_5ElNyTWfMhVGnbQ&s=10" },
  { id: 6, title: "o kadhal kanmani", release_date: "2015-04-17", genre_ids: [10749, 37], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRveZVRfTHBC2L_7TIkt2Kp0OuZL0HqjJLHk6-fgSPgA&s=10" },
  { id: 7, title: "sillunu oru kadhal", release_date: "2006-09-08", genre_ids: [10749,10751,37, 18], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGuemEEJKMdhrtcEcpNt2dfWFttN_sPI3ya8xOKLsgGw&s=10" },
  { id: 8, title: "vaaranam aayiram", release_date: "2008-11-14", genre_ids: [10749,10751,37, 18], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYcWqtafSFG0Q0I4kaP05aYhdCWiT0sXTz0UNXqq1GuA&s=10" },
  { id: 9, title: "Jailer", release_date: "2023-08-10", genre_ids: [28, 53,80], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRotGvbIM8sWeLgSg1vt82isb2QoaVo3OEQcrRahgMA&s=10" },
  { id: 10, title: "dasavatharam", release_date: "2008-06-13", genre_ids: [28, 53,80], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JudPDttJJBOcS_GYOhr0RQ-v6Xc9KckhGCiE-fvUBA&s=10" },
  { id: 11, title: "Nanban", release_date: "2012-01-12", genre_ids: [35, 18,10751], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vUwWFT91xyiUBE-5owjUjDmemPCAuwDf_NUvjFm5rw&s=10" },
  { id: 12, title: "soorarai pottru", release_date: "2020-11-12", genre_ids: [10751,99,36,18], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrSZYjyhWVzXSO_8OG8U0vvtxxkxZhLAqRpkHdY5CIg&s=10" },
  { id: 13, title: "Youth", release_date: "2016-01-14", genre_ids: [37, 10751], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbayQi7NjhEslcsKd-_VyWWmiGRN2mOmLobpJGqqubpQ&s=10" },
  { id: 14, title: "Rajini Murugan", release_date: "2024-10-10", genre_ids: [35, 37], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgnEoIA73DHCs84OGaveYc5Pi4b7ML0cFkt8F6m6Pidg&s=10" },
  { id: 15, title: "With Love", release_date: "2026-02-06", genre_ids: [10751,37,18], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrJEh0JJnguCnou4HcanYbEYIASWL4IfaarV4MtLE3A&s=10" },
  { id: 16, title: "thiruchitrambalam", release_date: "2018-08-18", genre_ids: [10751,37,18], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgg6NyMyVpwoEWdIvKHSGDf9IdqSQ5ZUgOCPmDy_Ifg&s" },
  { id: 17, title: "pirates of caribbean", release_date: "2003-07-09", genre_ids: [28, 12], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGUKz344AecFrQhWz5NpuMcs8nhEcZY435vjIxxPQ3Nw&s=10" },
  { id: 18, title: "charlie and the chocolate factory", release_date: "2005-07-15", genre_ids: [12,16,14], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmxjqY1O4dmGC5okgsVZAKCfBJy0lygZQhlWkx6umyw&s=10" },
  { id: 19, title: "The Wonderfools", release_date: "2026-05-25", genre_ids: [35, 14], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPgoAkrKTm6F6DTrS0wsUgMzci-8rvQe-kTlmhzUXV9w&s=10" },
  { id: 20, title: "interstellar", release_date: "2014-11-05", genre_ids: [28, 12,53,9648,878,36], poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RsgXcgyD_5B1Nb-wVrIDq4NKUQ9cnej4bItYKCGUyw&s=10" },
];

const paginate = (arr, page, perPage = 8) => {
  const start = (page - 1) * perPage;
  return {
    data: {
      results: arr.slice(start, start + perPage),
      total_pages: Math.ceil(arr.length / perPage),
      total_results: arr.length,
    }
  };
};

export const getPopularMovies = async (page = 1) => paginate(MOCK_MOVIES, page);

export const searchMovies = async (query, page = 1) => {
  const filtered = MOCK_MOVIES.filter(m =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );
  return paginate(filtered, page);
};

export const getGenres = async () => ({ data: { genres: [] } });

export default null;

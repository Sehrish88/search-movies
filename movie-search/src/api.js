const API_KEY = 'e3164b12';

// 1. For finding a specific movie details you can do the following:
// omdbapi.com/?t=Harry Potter&apikey=e3164b12

// 2. For finding a list of movies by a search term
// omdbapi.com/?s=abc&apikey=e3164b12

export const getYouMightLikeMoviesUrl = () => {
  // Randomize you might like movies
  const keywords = ['games', 'animals', 'beauty'];
  const randomizedSearchTerm =
    keywords[Math.floor(Math.random() * keywords.length)];

  return `http://www.omdbapi.com/?s=${randomizedSearchTerm}&apikey=${API_KEY}`;
};

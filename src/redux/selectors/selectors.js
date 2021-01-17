// Selectors
const getMovies = store => store.movies;

export const getMoviesByFilter = (store, search) => {
  const allMovies = getMovies(store);
  const { filter, value } = search;

  if (allMovies && !value) {
    return allMovies;
  }

  if (!allMovies) {
    return [];
  }

  return allMovies.filter(movie => movie[filter].includes(value));
};

export const getAllOfProperty = (store, property) => {
  const allMovies = getMovies(store);
  if (!allMovies) {
    return [];
  }

  const allOnce = {};
  allMovies.map(movie => {
    allOnce[movie[property]] = 1;
    return [];
  });

  return Object.keys(allOnce);
};

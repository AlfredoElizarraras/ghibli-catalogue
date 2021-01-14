// Selectors
const getMovies = store => store.movies;

const getMoviesByFilter = (store, search) => {
  const allMovies = getMovies(store);
  const { filter, value } = search;

  if (!allMovies || !filter || !value) {
    return null;
  }

  return allMovies.filter(movie => movie[filter].includes(value));
};

export const getAllOfProperty = (store, property) => {
  const allMovies = getMovies(store);
  if (!allMovies) {
    return null;
  }

  const allOnce = {};
  allMovies.map(movie => {
    allOnce[movie[property]] = 1;
    return null;
  });

  return Object.keys(allOnce);
};

export const getMoviesByAllFilters = (store, filters) => {
  const allMovies = getMovies(store);
  if (!allMovies) {
    return null;
  } if (!filters) {
    return allMovies;
  }

  const currentStore = {
    movies: [
      ...allMovies,
    ],
  };

  Object.keys(filters).forEach(filter => {
    const search = {
      filter,
      value: filters[filter],
    };

    currentStore.movies = getMoviesByFilter(currentStore, search);
  });

  return currentStore.movies;
};

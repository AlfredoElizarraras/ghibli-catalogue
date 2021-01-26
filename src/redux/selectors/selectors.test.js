import {
  getMovies,
  getMovie,
  getAllOfProperty,
  getMoviesByFilter,
} from './selectors';

const state = {
  movies: [
    {
      id: '1',
      title: 'Movie 1',
      director: 'director 1',
    },
    {
      id: '2',
      title: 'Movie 2',
      director: 'director 2',
    },
    {
      id: '3',
      title: 'Movie 3',
      director: 'director 3',
    },
    {
      id: '4',
      title: 'Movie 4',
      director: 'director 3',
    },
  ],
};

describe('getMovies', () => {
  test('should get all the movies in the state', () => {
    const { movies } = state;
    expect(getMovies(state)).toEqual(movies);
  });
});

describe('getMovie', () => {
  test('should get a movie by id', () => {
    const movie = state.movies[0];
    expect(getMovie(state, '1')[0]).toEqual(movie);
  });
});

describe('getAllOfProperty', () => {
  test('should get all values once from an array of objects', () => {
    const directors = ['director 1', 'director 2', 'director 3'];
    expect(getAllOfProperty(state, 'director')).toEqual(directors);
  });
});

describe('getMoviesByFilter', () => {
  test('should get the movies according to the specified filter', () => {
    const movies = [{
      id: '1',
      title: 'Movie 1',
      director: 'director 1',
    }];
    expect(getMoviesByFilter(state, { filter: 'director', value: 'director 1' })).toEqual(movies);
  });
});

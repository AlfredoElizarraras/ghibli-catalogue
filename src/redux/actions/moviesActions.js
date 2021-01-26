import ADD_MOVIES from '../action_types/moviesActionTypes';

const addMovies = movies => ({
  type: ADD_MOVIES,
  payload: movies,
});

export default addMovies;

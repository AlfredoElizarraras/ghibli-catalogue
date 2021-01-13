import ADD_MOVIES from '../../action_types';

const addMovies = movies => ({
  type: ADD_MOVIES,
  payload: {
    ...movies,
  },
});

export default addMovies;

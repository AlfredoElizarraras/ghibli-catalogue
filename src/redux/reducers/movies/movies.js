import ADD_MOVIES from '../../action_types/moviesActionTypes';

const movies = (state = [], action) => {
  switch (action.type) {
    case ADD_MOVIES:
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
};

export default movies;

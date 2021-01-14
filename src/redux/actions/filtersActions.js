import CHANGE_FILTER from '../action_types/filters';

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: {
    ...filter,
  },
});

export default changeFilter;

import CHANGE_FILTER from '../../action_types/filters';

const filters = (state = null, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload.filter === 'ALL' ? null : action.payload.filter;
    default:
      return state;
  }
};

export default filters;

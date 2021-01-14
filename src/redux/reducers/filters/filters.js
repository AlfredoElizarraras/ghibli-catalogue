import CHANGE_FILTER from '../../action_types/filters';

const filters = (state = null, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      const newFilter = {
        ...action.payload,
      };
      const newFilterKey = Object.keys(newFilter)[0];

      if (Object.keys(state).length === 1
      && newFilter[newFilterKey] === 'ALL') {
        return null;
      } if (newFilter[newFilterKey] === 'ALL') {
        const objToReturn = {
          ...state,
        };

        delete objToReturn[newFilterKey];

        return objToReturn;
      }

      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default filters;

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import request from '../../utils/requests';
import { getMovies } from '../../redux/selectors/selectors';

const Root = ({ store, addMovies }) => {
  useEffect(async () => {
    const movies = getMovies(store);
    if (!movies) {
      const response = request();
      response.then(data => {
        addMovies(data.data);
      });
    } else {
      addMovies(movies);
    }
  }, []);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired, /* eslint-disable-line react/forbid-prop-types */
  addMovies: PropTypes.func.isRequired,
};

export default Root;

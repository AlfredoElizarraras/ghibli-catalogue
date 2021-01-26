import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import request from '../../utils/requests';

const Root = ({ store, addMovies, movies }) => {
  useEffect(async () => {
    if (movies.length < 1) {
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
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      producer: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      rt_score: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Root;

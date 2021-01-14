import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import MoviesList from '../../containers/MoviesList';
import request from '../../utils/requests';

const Root = ({ store, addMovies }) => {
  useEffect(async () => {
    const response = request();
    response.then(data => {
      addMovies(data.data);
    });
  }, []);

  return (
    <Provider store={store}>
      <MoviesList />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired, /* eslint-disable-line react/forbid-prop-types */
  addMovies: PropTypes.func.isRequired,
};

export default Root;

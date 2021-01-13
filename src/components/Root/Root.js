import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

const Root = ({ store }) => (
  <Provider store={store}>
    Ghibli Catalogue
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired, /* eslint-disable-line react/forbid-prop-types */
};

export default Root;

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './containers/Root';
import configureStore from './redux/store';
import './reset.css';
import './index.css';

const store = configureStore();

render(
  <BrowserRouter>
    <Root store={store} />
  </BrowserRouter>,
  document.getElementById('root'),
);

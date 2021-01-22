import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Filter from './Filter';

describe('Filter', () => {
  test('should render without crashing', () => {
    const div = document.createElement('div');
    const props = {
      handleFilterChange: filter => filter,
      type: 'director',
      data: ['director 1', 'director 2', 'director 3'],
    };
    render(<Filter
      handleFilterChange={props.handleFilterChange}
      type={props.type}
      data={props.data}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

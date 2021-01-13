import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from './Root';

test('renders learn react link', () => {
  render(<Root />);
  const linkElement = screen.getByText(/Ghilbli Catalogue/i);
  expect(linkElement).toBeInTheDocument();
});

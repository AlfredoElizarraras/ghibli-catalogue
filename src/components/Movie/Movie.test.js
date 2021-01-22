import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Movie from './Movie';

describe('Movie', () => {
  test('should render without crashing', () => {
    const props = {
      movie: {
        id: '1',
        title: 'Movie title',
        description: 'Movie description',
        director: 'Movie director',
        producer: 'Movie producer',
        release_date: 'Movie release date',
        rt_score: 'Movie rate score',
        url: 'Movie URL',
      },
    };

    const tree = renderer.create(
      <BrowserRouter>
        <Movie movie={props.movie} />
      </BrowserRouter>,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

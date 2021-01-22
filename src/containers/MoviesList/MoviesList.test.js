import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MoviesList from './MoviesList';

describe('MoviesList', () => {
  test('should render without crashing', () => {
    const props = {
      movies: [
        {
          id: '1',
          title: 'Movie 1',
          director: 'director 1',
          description: 'Movie description',
          producer: 'Movie producer',
          release_date: 'Movie release date',
          rt_score: 'Movie rate score',
          url: 'Movie URL',
        },
        {
          id: '2',
          title: 'Movie 2',
          director: 'director 2',
          description: 'Movie description',
          producer: 'Movie producer',
          release_date: 'Movie release date',
          rt_score: 'Movie rate score',
          url: 'Movie URL',
        },
        {
          id: '3',
          title: 'Movie 3',
          director: 'director 3',
          description: 'Movie description',
          producer: 'Movie producer',
          release_date: 'Movie release date',
          rt_score: 'Movie rate score',
          url: 'Movie URL',
        },
        {
          id: '4',
          title: 'Movie 4',
          director: 'director 3',
          description: 'Movie description',
          producer: 'Movie producer',
          release_date: 'Movie release date',
          rt_score: 'Movie rate score',
          url: 'Movie URL',
        },
      ],
      directors: ['director 1', 'director 2', 'director 3'],
      changeFilter: filter => filter,
    };

    const tree = renderer.create(
      <BrowserRouter>
        <MoviesList
          movies={props.movies}
          directors={props.directors}
          changeFilter={props.changeFilter}
        />
      </BrowserRouter>,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

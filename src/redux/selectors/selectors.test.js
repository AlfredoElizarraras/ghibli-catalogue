import deepFreeze from 'deep-freeze';
import { getMoviesByAllFilters } from './selectors';

describe('getMoviesByAllFilters', () => {
  it('Should return movies from the store sorted by the current filters', () => {
    const store = {
      movies: [
        {
          id: '1',
          director: 'Hayao Miyazaki',
          producer: 'Isao Takahata',
          release_date: '1986',
          rt_score: '95',
        },
        {
          id: '2',
          director: 'Isao Takahata',
          producer: 'Toru Takeo',
          release_date: '1985',
          rt_score: '97',
        },
        {
          id: '3',
          director: 'Isao Satoru',
          producer: 'Marui Haru',
          release_date: '1988',
          rt_score: '97',
        },
        {
          id: '4',
          director: 'Isao Takahata',
          producer: 'Toru Hara',
          release_date: '1988',
          rt_score: '89',
        },
      ],
      filters: {
        director: 'Isao Takahata',
        producer: 'Toru Takeo',
      },
    };
    const movies = [
      {
        id: '2',
        director: 'Isao Takahata',
        producer: 'Toru Takeo',
        release_date: '1985',
        rt_score: '97',
      },
    ];

    deepFreeze(store);

    expect(
      getMoviesByAllFilters(store, store.filters),
    ).toEqual(movies);
  });

  it('Should return all the movies if there are not currently any filter', () => {
    const store = {
      movies: [
        {
          id: '1',
          director: 'Hayao Miyazaki',
          producer: 'Isao Takahata',
          release_date: '1986',
          rt_score: '95',
        },
        {
          id: '2',
          director: 'Isao Takahata',
          producer: 'Toru Takeo',
          release_date: '1985',
          rt_score: '97',
        },
        {
          id: '3',
          director: 'Isao Satoru',
          producer: 'Marui Haru',
          release_date: '1988',
          rt_score: '97',
        },
        {
          id: '4',
          director: 'Isao Takahata',
          producer: 'Toru Hara',
          release_date: '1988',
          rt_score: '89',
        },
      ],
      filters: null,
    };
    const movies = [
      {
        id: '1',
        director: 'Hayao Miyazaki',
        producer: 'Isao Takahata',
        release_date: '1986',
        rt_score: '95',
      },
      {
        id: '2',
        director: 'Isao Takahata',
        producer: 'Toru Takeo',
        release_date: '1985',
        rt_score: '97',
      },
      {
        id: '3',
        director: 'Isao Satoru',
        producer: 'Marui Haru',
        release_date: '1988',
        rt_score: '97',
      },
      {
        id: '4',
        director: 'Isao Takahata',
        producer: 'Toru Hara',
        release_date: '1988',
        rt_score: '89',
      },
    ];

    deepFreeze(store);

    expect(
      getMoviesByAllFilters(store, store.filters),
    ).toEqual(movies);
  });
});

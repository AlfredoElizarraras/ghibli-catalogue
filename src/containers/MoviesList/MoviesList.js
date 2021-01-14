import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../../components/Movie';
import Filter from '../../components/Filter';
import styles from './moviesList.module.css';

const MoviesList = ({
  movies = [], directors, producers, changeFilter,
}) => {
  const handleFilterChange = filter => {
    const { name, value } = filter;
    changeFilter({ name, value });
  };

  return (
    <>
      <div className={styles.filters}>
        <Filter type="director" handleFilterChange={handleFilterChange} data={directors} />
        <Filter type="producer" handleFilterChange={handleFilterChange} data={producers} />
      </div>
      <div className={styles.movies}>
        {
          movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))
        }
      </div>
    </>
  );
};

MoviesList.propTypes = {
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
  directors: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  producers: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default MoviesList;

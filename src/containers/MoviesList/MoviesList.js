import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../../components/Movie';
import Filter from '../../components/Filter';
import styles from './movieList.module.css';

const MoviesList = ({ movies = [], changeFilter, handleGetData }) => {
  const handleFilterChange = filter => {
    const { name, value } = filter;
    changeFilter({ name, value });
  };

  return (
    <>
      <div className={styles.filters}>
        <Filter handleFilterChange={handleFilterChange} type="director" handleGetData={handleGetData} />
        <Filter handleFilterChange={handleFilterChange} type="producer" handleGetData={handleGetData} />
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
  changeFilter: PropTypes.func.isRequired,
  handleGetData: PropTypes.func.isRequired,
};

export default MoviesList;

import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import Filter from '../../components/Filter';
import movieImage from '../../utils/data';
import styles from './moviesList.module.css';

const MoviesList = ({
  movies = [], directors, changeFilter,
}) => {
  const { url } = useRouteMatch();

  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  return (
    <>
      <div className={styles.filters}>
        <Filter type="director" handleFilterChange={handleFilterChange} data={directors} />
      </div>
      <div className={styles.movies}>
        {
          movies.map(movie => (
            <div className={styles.movie} key={movie.id}>
              <Link className={styles.imageContainer} to={`${url}${movie.id}`}>
                <img src={movieImage[movie.id]} alt="Totoro" />
                {movie.title}
              </Link>
              <span>
                {movie.director}
              </span>
            </div>
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
  changeFilter: PropTypes.func.isRequired,
};

export default MoviesList;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import movieImage from '../../utils/data';

const Movie = ({ movie }) => (
  <>
    <nav>
      <Link to="/">
        <img src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png" alt="back to movies" />
      </Link>

      <h1>{ movie.title }</h1>
    </nav>

    <div>
      <div>
        <img alt={movie.title} src={movieImage[movie.id]} />
      </div>
      <div />
      <div>
        <div>
          <div>
            <div>Release year</div>
            { movie.release_date }
          </div>
          <div />
          <div>
            <div>Score:</div>
            { movie.rt_score }
            / 100
          </div>
        </div>
        <div>
          <div>
            <div>Director:</div>
            { movie.director }
          </div>
          <div />
          <div>
            <div>Producer:</div>
            { movie.producer }
          </div>
        </div>
      </div>
      <div>
        { movie.description }
      </div>
    </div>
  </>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    rt_score: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;

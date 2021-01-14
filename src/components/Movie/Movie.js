import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ movie }) => (
  <div>
    <span>{ movie.title }</span>
    <span>{ movie.description }</span>
    <span>{ movie.director }</span>
    <span>{ movie.producer }</span>
    <span>{ movie.release_date }</span>
    <span>{ movie.rt_score }</span>
    <span>{ movie.url }</span>
  </div>
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

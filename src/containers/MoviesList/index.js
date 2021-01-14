import { connect } from 'react-redux';
import MovieList from './MoviesList';
import changeFilter from '../../redux/actions/filtersActions';
import { getMoviesByAllFilters, getAllOfProperty } from '../../redux/selectors/selectors';

const mapStateToProps = state => {
  const { filters } = state;
  const movies = getMoviesByAllFilters(state, filters);
  const directors = getAllOfProperty(state, 'director');
  const producers = getAllOfProperty(state, 'producer');

  return { movies, directors, producers };
};

export default connect(mapStateToProps, { changeFilter })(MovieList);

import { connect } from 'react-redux';
import MovieList from './MoviesList';
import changeFilter from '../../redux/actions/filtersActions';
import { getMoviesByAllFilters, getAllOfProperty } from '../../redux/selectors/selectors';

const mapStateToProps = state => {
  const { filters } = state;
  const movies = getMoviesByAllFilters(state, filters);

  return { movies };
};

export default connect(mapStateToProps, { changeFilter, getAllOfProperty })(MovieList);

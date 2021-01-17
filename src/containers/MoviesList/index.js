import { connect } from 'react-redux';
import MovieList from './MoviesList';
import changeFilter from '../../redux/actions/filtersActions';
import { getMoviesByFilter, getAllOfProperty } from '../../redux/selectors/selectors';

const mapStateToProps = state => {
  const { filters } = state;
  const movies = getMoviesByFilter(state, { filter: 'director', value: filters });
  const directors = getAllOfProperty(state, 'director');

  return { movies, directors };
};

export default connect(mapStateToProps, { changeFilter })(MovieList);

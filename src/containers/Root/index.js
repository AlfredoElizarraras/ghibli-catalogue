import { connect } from 'react-redux';
import Root from './Root';
import addMovies from '../../redux/actions/moviesActions';
import { getMovies } from '../../redux/selectors/selectors';

const mapStateToProps = state => {
  const movies = getMovies(state);

  return { movies };
};

export default connect(mapStateToProps, { addMovies })(Root);

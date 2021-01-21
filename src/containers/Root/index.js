import { connect } from 'react-redux';
import Root from './Root';
import addMovies from '../../redux/actions/moviesActions';

export default connect(null, { addMovies })(Root);

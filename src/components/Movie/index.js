import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovie } from '../../redux/selectors/selectors';
import Movie from './Movie';

const mapStateToProps = state => {
  const { movieId } = useParams();

  return { movie: getMovie(state, movieId)[0] };
};

export default connect(mapStateToProps, null)(Movie);

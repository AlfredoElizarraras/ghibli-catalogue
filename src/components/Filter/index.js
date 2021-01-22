import { connect } from 'react-redux';
import Filter from './Filter';

const mapStateToProps = state => {
  const filter = state.filters ? state.filters : 'ALL';

  return { filter };
};

export default connect(mapStateToProps, null)(Filter);

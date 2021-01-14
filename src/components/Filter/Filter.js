import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'ALL',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = filter => {
    const { handleFilterChange, type } = this.props;
    handleFilterChange({ [type]: filter });
    this.setState({ selected: filter });
  }

  render() {
    const { selected } = this.state;
    const { data, type } = this.props;
    return (
      <>
        <label htmlFor={type} className={styles.filter}>
          Fiter by
          {' '}
          { type }
          <select
            id={type}
            type={type}
            name={type}
            onChange={e => this.handleChange(e.target.value)}
            value={selected}
          >
            <option>ALL</option>
            {data.map(dataInfo => (
              <option key={dataInfo} value={dataInfo}>
                {dataInfo.toUpperCase()}
              </option>
            ))}
          </select>
        </label>
      </>
    );
  }
}

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Filter;

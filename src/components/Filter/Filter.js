import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ type, handleFilterChange, data }) => {
  const [filter, setFilter] = useState('ALL');

  const handleChange = filter => {
    handleFilterChange(filter);
    setFilter(filter);
  };

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
          onChange={e => handleChange(e.target.value)}
          value={filter}
        >
          <option>ALL</option>
          {data.map(dataInfo => (
            <option key={`${dataInfo}${type.charAt(0).toUpperCase() + type.slice(1)}`} value={dataInfo}>
              {dataInfo.toUpperCase()}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Filter;

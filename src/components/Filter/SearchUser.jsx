import PropTypes from 'prop-types';
import React from 'react'
import styles from './SearchUser.module.css';

export const SearchUser = ({setFilter}) => {
    return <input onChange={setFilter} 
    className={styles.searchInput} 
    placeholder="Search..."/>
}

SearchUser.propTypes = {
    setFilter: PropTypes.func.isRequired,
  };
import React from "react";
import PropTypes from 'prop-types'; 
import styles from './Contact.module.css';

export const Contact =({id, name, number,deleteUser}) => {
    return (
        <li className={styles.contactItem}>
            <p className={styles.contactName}>{name}</p>
            <p className={styles.contactNumber}>{number}</p>
            <button 
            onClick={() => deleteUser(id)} 
            className={styles.deleteButton}>delete</button>
        </li>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteUser: PropTypes.func.isRequired,
  };
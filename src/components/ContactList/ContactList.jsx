// import PropTypes from 'prop-types'
import React from 'react'
import { Contact } from './Contact'
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactList = ({dataContact, deleteUser}) => {
 
    return (
        <div>
            <ul className={styles.contactList}>
                {dataContact.map(item => (
                <Contact deleteUser={deleteUser} {...item} key={item.id}/>
                ))}
            </ul>
        </div>
    )
    
}

ContactList.propTypes = {
    dataContact: PropTypes.array.isRequired,
    deleteUser: PropTypes.func.isRequired,
  };
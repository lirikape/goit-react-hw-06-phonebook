import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export const ContactForm = ({ onAddNewUser, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;

    if (name === 'number' && !/^[0-9]*$/.test(value)) {
      return;
    }

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleOnClick = () => {
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const isNameExists = contacts.some(contact => contact.name === name);

    if (isNameExists) {
      alert(`Контакт з іменем "${name}" вже існує в книзі.`);
      return;
    }

    onAddNewUser({ id: crypto.randomUUID(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.inputСontainer}>
      <h2>Name</h2>
      <input onChange={handleChangeInput} name="name" value={name} required />
      <h2>Number</h2>
      <input
        className={styles.inputForm}
        name="number"
        onChange={handleChangeInput}
        value={number}
        pattern="[0-9]*"
        required
      />

      <hr></hr>
      <button onClick={handleOnClick} className={styles.addButton}>
        Add contact
      </button>
    </div>
  );
};

ContactForm.propTypes = {
  onAddNewUser: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

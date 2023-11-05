import { ContactForm } from './ContactForm/ContactForm';
import React, { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { SearchUser } from './Filter/SearchUser';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    const storedContacts = JSON.parse(window.localStorage.getItem('contacts'));
    return (
      storedContacts || [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  useEffect(() => {
    const storedContacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteUser = id => {
    setContacts(prev => prev.filter(user => user.id !== id));
  };

  const handleAddNewUser = newData => {
    setContacts(prev => [...prev, newData]);
  };

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilterData = () => {
    return contacts.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredData = getFilterData();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddNewUser={handleAddNewUser} contacts={contacts} />

      <h2>Contacts</h2>
      <SearchUser setFilter={handleChangeFilter} />
      <ContactList dataContact={filteredData} deleteUser={handleDeleteUser} />
    </div>
  );
};

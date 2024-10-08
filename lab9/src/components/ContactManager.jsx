import React, { useState } from 'react';
import AddContactComponent from './AddContactComponent';
import ContactTable from './ContactTable';
import SearchInput from './SearchInput';

function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleUpdate = (id, updatedContact) => {
    setContacts(contacts.map(contact =>
      contact.id === id ? { ...contact, ...updatedContact } : contact
    ));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchInput searchValue={searchTerm} onSearchChange={handleSearchChange} />
      <AddContactComponent onSubmit={handleAddContact} />
      <ContactTable contacts={filteredContacts} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}

export default ContactManager;

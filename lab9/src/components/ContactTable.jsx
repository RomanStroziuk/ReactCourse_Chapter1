import React from 'react';
import './ContactTable.css';
import ContactRow from './ContactRow.jsx'; // Updated import statement

const ContactTable = ({ contacts, onDelete, onUpdate }) => {
  if (contacts.length === 0) {
    return <div>No data to display.</div>;
  }

  return (
    <table className="contact-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id.toString()}
            contact={contact}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;

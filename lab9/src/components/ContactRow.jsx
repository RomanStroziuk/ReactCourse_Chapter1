import React, { useState } from 'react';

const ContactRow = ({ contact, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [phone, setPhone] = useState(contact.phone);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'firstName') setFirstName(value);
    else if (name === 'lastName') setLastName(value);
    else if (name === 'phone') setPhone(value);
  };

  const handleUpdate = () => {
    const newErrors = {};

    // Валідація
    if (!firstName.trim()) {
      newErrors.firstName = true;
    }
    if (!lastName.trim()) {
      newErrors.lastName = true;
    }
    if (!phone.trim()) {
      newErrors.phone = 'required';
    } else if (!/^\d+$/.test(phone)) {
      newErrors.phone = 'invalid';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onUpdate(contact.id, { firstName, lastName, phone });
    setIsEditing(false);
  };

  return (
    <tr>
      <td>{contact.id}</td>
      <td>
        {isEditing ? (
          <>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              className={errors.firstName ? 'error' : ''}
            />
            {errors.firstName && (
              <span className="error-message">The first name is required</span>
            )}
          </>
        ) : (
          contact.firstName
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              className={errors.lastName ? 'error' : ''}
            />
            {errors.lastName && (
              <span className="error-message">The last name is required</span>
            )}
          </>
        ) : (
          contact.lastName
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handleInputChange}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone === 'required' && (
              <span className="error-message">The phone is required</span>
            )}
            {errors.phone === 'invalid' && (
              <span className="error-message">Phone must contain only digits</span>
            )}
          </>
        ) : (
          contact.phone
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ContactRow;

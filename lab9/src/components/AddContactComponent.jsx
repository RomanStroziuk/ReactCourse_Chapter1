import React, { useState } from "react";
import "./AddContactComponent.css";

const AddContactComponent = ({ onSubmit }) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Валідація
    if (!contact.firstName.trim()) {
      newErrors.firstName = true;
    }
    if (!contact.lastName.trim()) {
      newErrors.lastName = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit({ id: Date.now(), ...contact });
    setContact({ firstName: "", lastName: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="add-contact-form">
      <input
        name="firstName"
        value={contact.firstName}
        onChange={handleInputChange}
        placeholder="First Name*"
        className={errors.firstName ? "error" : ""}
      />
      {errors.firstName && (
        <span className="error-message">The first name is required</span>
      )}
      <input
        name="lastName"
        value={contact.lastName}
        onChange={handleInputChange}
        placeholder="Last Name*"
        className={errors.lastName ? "error" : ""}
      />
      {errors.lastName && (
        <span className="error-message">The last name is required</span>
      )}
      <input
        name="phone"
        value={contact.phone}
        onChange={handleInputChange}
        placeholder="Phone*"
        className={errors.phone ? "error" : ""}
      />
      {errors.phone && errors.phone === "required" && (
        <span className="error-message">The phone is required</span>
      )}
      {errors.phone && errors.phone === "invalid" && (
        <span className="error-message">Phone must contain only digits</span>
      )}
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContactComponent;

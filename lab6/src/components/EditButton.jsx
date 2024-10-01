import React from 'react';
import './ButtonStyles.css';

const EditButton = ({ isEditing, onClick }) => {
    return (
        <button onClick={onClick}>
            <img
                src={isEditing ? "/assets/icons/save-icon.png" : "/assets/icons/edit-icon.png"}
                alt={isEditing ? "Save" : "Edit"}
                className="icon"
            />
        </button>
    );
};

export default EditButton;

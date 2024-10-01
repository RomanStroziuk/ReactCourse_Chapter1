import React from 'react';
import './ButtonStyles.css';

const DeleteButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="delete">
            <img
                src="/delete-icon.png"
                alt="Delete"
                className="icon"
            />
        </button>
    );
};

export default DeleteButton;

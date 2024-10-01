import React, { useState } from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const ToDoRow = ({ toDo, onDelete, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(toDo.title);
    const [error, setError] = useState('');

    const handleEditClick = () => {
        if (isEditing) {
            if (!newTitle.trim()) {
                setError('Назва задачі не може бути порожньою');
                return;
            }
            onSave(toDo.id, newTitle);
            setError('');
        }
        setIsEditing(!isEditing);
    };

    const handleTitleChange = (event) => {
        setNewTitle(event.target.value);
        setError('');
    };

    return (
        <tr>
            <td>{toDo.id}</td>
            <td>
                {isEditing ? (
                    <input
                        type="text"
                        value={newTitle}
                        onChange={handleTitleChange}
                        placeholder="Enter new title"
                    />
                ) : (
                    <span>{toDo.title}</span>
                )}
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </td>
            <td style={{ display: 'flex', gap: '8px' }}>
                <EditButton isEditing={isEditing} onClick={handleEditClick} />
                <DeleteButton onClick={() => onDelete(toDo.id)} />
            </td>
        </tr>
    );
};

export default ToDoRow;

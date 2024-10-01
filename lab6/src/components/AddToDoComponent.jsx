import React from 'react'
import './ButtonStyles.css';

const AddToDOComponent = ({ title = 'abc', onTitleChange, onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit()
    }
    return (
        <form>
            <input value={title} onChange={onTitleChange} />
            <button className="add-button" onClick={onSubmit}>Add</button>
            </form>
    )
}



export default AddToDOComponent

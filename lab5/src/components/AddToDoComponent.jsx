import React from 'react'

const AddToDOComponent = ({ title = 'abc', onTitleChange, onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit()
    }
    return (
        <form>
            <input value={title} onChange={onTitleChange} />
            <button onClick={onSubmit}>Add</button>
        </form>
    )
}

export default AddToDOComponent

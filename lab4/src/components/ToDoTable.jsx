import React from 'react'
import './ToDoTable.css'

const ToDoTable = ({ toDos, onDelete }) => {
    return (
        <table className="todo-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {toDos.map((toDo) => (
                    <tr key={toDo.id.toString()}>
                        <td>{toDo.id.toString()}</td>
                        <td>{toDo.title}</td>
                        <td>
                            <button
                                className="delete-button"
                                onClick={() => onDelete(toDo.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ToDoTable

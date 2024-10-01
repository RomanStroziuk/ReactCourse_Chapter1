import React from 'react';
import ToDoRow from './ToDoRow';

const ToDoTable = ({ toDos, onDelete, onSave }) => {
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
                    <ToDoRow
                        key={toDo.id.toString()}
                        toDo={toDo}
                        onDelete={onDelete}
                        onSave={onSave}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default ToDoTable;

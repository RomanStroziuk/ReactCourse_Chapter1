import React, { useState } from 'react';
import AddToDoComponent from './AddToDoComponent';
import ToDoTable from './ToDoTable';
import SearchInput from './SearchInput';
import useGetAllToDo from '../hooks/useGetAllToDo';
import LoaderWithDimmer from './LoaderWithDimmer';

function ToDoManager() {
    const { isLoading, data: toDos, setData: setToDos, error } = useGetAllToDo();
    const [newToDo, setNewToDo] = useState({ title: '' });
    const [searchTerm, setSearchTerm] = useState('');

    const handleNewTitleChange = (event) => {
        setNewToDo({ title: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newToDo.title.trim()) {
            alert('Назва задачі не може бути порожньою');
            return;
        }
        setToDos([...toDos, { id: Date.now(), title: newToDo.title }]);
        setNewToDo({ title: '' });
    };

    const handleDelete = (id) => {
        const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
        setToDos(updatedToDos);
    };

    const handleSave = (id, newTitle) => {
        const updatedToDos = toDos.map((toDo) =>
            toDo.id === id ? { ...toDo, title: newTitle } : toDo
        );
        setToDos(updatedToDos);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredToDos = toDos.filter((toDo) =>
        toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (error) return <div>Помилка: {error.message}</div>;

    return (
        <div>
            <SearchInput searchValue={searchTerm} onSearchChange={handleSearchChange} />
            <AddToDoComponent title={newToDo.title} onTitleChange={handleNewTitleChange} onSubmit={handleSubmit} />

            <LoaderWithDimmer isLoading={isLoading}>
                <ToDoTable toDos={filteredToDos} onDelete={handleDelete} onSave={handleSave} />
            </LoaderWithDimmer>
        </div>
    );
}

export default ToDoManager;

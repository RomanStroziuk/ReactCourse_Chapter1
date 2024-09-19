import React, { useState } from 'react';
import AddToDoComponent from './AddToDoComponent';
import ToDoTable from './ToDoTable';
import SearchInput from './SearchInput';

function ToDoManager() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState({ title: '' });
  const [searchTerm, setSearchTerm] = useState('');

  function handleNewTitleChange(event) {
    setNewToDo({ title: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!newToDo.title.trim()) {
      setError('Назва задачі не може бути порожньою');
      return;
    }
      setToDos([...toDos, { id: Date.now(), title: newToDo.title }]);
      setNewToDo({ title: '' });

  }


  function handleDelete(id) {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredToDos = toDos.filter(toDo =>
    toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchInput searchValue={searchTerm} onSearchChange={handleSearchChange} />
      <AddToDoComponent
        title={newToDo.title}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />
      <ToDoTable toDos={filteredToDos} onDelete={handleDelete} />
    </div>
  );
}

export default ToDoManager;

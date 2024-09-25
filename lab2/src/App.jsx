import { useState } from 'react';
import './App.css';
import AddToDOComponent from './components/AddToDoComponent';
import ToDoTable from './components/ToDoTable';
import SearchInput from './components/SearchInput';
import PageTitle from './components/PageTitle';

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState({ title: '' });
  const [searchTerm, setSearchTerm] = useState('');

  function handleNewTitleChange(event) {
    setNewToDo({ id: new Date().getTime(), title: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newToDo.title) {
      setToDos([...toDos, newToDo]);
      setNewToDo({ title: '' }); // Clear the input after adding
    }
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
    <>
    <PageTitle title="Мій список задач"/>
      <SearchInput searchValue={searchTerm} onSearchChange={handleSearchChange} />
      <AddToDOComponent
        title={newToDo.title}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />
      <ToDoTable toDos={filteredToDos} onDelete={handleDelete} />
    </>
  );
}

export default App;

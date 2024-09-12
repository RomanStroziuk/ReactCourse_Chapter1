import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDOComponent from './components/AddToDoComponent'
import ToDoTable from './components/ToDoTable'

function App() {
  const [toDos, setToDos] = useState ([]);
  const [newToDo, setNewToDo] = useState(null);

   function handleNewTitleChange(event) {
    setNewToDo({id: new Date(), title: event.target.value})
   }

   function handleSubmit(){
    setToDos([...toDos, newToDo]);
   }

  return (
    <>
    <AddToDOComponent
     title={newToDo?.title}
     onTitleChange={handleNewTitleChange}
     onSubmit={handleSubmit}
    />
    {/* <ToDoTable/> */}
    {toDos[0]?.title ?? "NA"}
    </>
  );
}

export default App;

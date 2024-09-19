import React from 'react';
import PageTitle from './components/PageTitle'; // Використовуйте відносний шлях
import ToDoManager from './components/ToDoManager'; // Використовуйте відносний шлях

function App() {
  return (
    <>
      <PageTitle title="Мій список задач" />
      <ToDoManager />
    </>
  );
}

export default App;

import React from 'react';
import PageTitle from './components/PageTitle';
import ToDoManager from './components/ToDoManager';

function App() {
    return (
        <>
            <PageTitle title="Мій список задач" />
            <ToDoManager />
        </>
    );
}

export default App;

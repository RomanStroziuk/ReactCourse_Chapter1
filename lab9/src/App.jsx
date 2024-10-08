import React from 'react';
import PageTitle from './components/PageTitle'; // Використовуйте відносний шлях
import ContactManager from './components/ContactManager'; // Використовуйте відносний шлях

function App() {
  return (
    <>
      <PageTitle title="Адресна книга" />
      <ContactManager />
    </>
  );
}

export default App;

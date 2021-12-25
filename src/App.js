import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';

function App() {
  const[contacts, setContacts] = useState([]);

  return (
    <main className="App">
      <h2>Contact App</h2>
      <AddContact />
      <section>Contact List</section>
    </main>
  );
}

export default App;

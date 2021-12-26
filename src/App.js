import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';

function App() {
  const[contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    // console.log(contact)
    setContacts([...contacts, {id:Math.ceil(Math.random()*100), ...contact }])
  }
  const deleteContactHandler = (id) => {
    const filteredContacts = contacts.filter((c) => c.id !== id);
    setContacts(filteredContacts);
  }

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if(savedContacts) setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <main className="App">
      <h2>Contact App</h2>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} onDelete={deleteContactHandler} />
    </main>
  );
}

export default App;

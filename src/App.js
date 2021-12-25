import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';

function App() {
  const[contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    // console.log(contact)
    setContacts([...contacts, {id:Math.ceil(Math.random()*100), ...contact }])

    // const NewAdded = {
    //   id: Math.random()*100, 
    //   name:contact.name, 
    //   email:contact.email,
    // }
    // setContacts([...contacts, NewAdded])
}

  return (
    <main className="App">
      <h2>Contact App</h2>
      <AddContact addContactHandler={addContactHandler} />
      <section>Contact List</section>
    </main>
  );
}

export default App;

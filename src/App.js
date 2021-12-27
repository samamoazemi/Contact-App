import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <h1>Contact App</h1>
      <Switch>
        <Route 
           path="/add" 
           render={(props) =>(
             <AddContact 
               addContactHandler={addContactHandler} 
               {...props}
             />)}
        />
         <Route 
           path="/" 
           render={(props) =>(
             <ContactList 
               contacts={contacts} 
               onDelete={deleteContactHandler} 
               {...props}
             />)} 
           exact={true}
        />
      </Switch>
  
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} onDelete={deleteContactHandler} /> */}
    </main>
  );
}

export default App;

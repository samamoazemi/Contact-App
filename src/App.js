import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactDetail from './components/ContactDetail/ContactDetail';
import ContactList from './components/ContactList/ContactList';
import getContacts from './services/getContactsService';
import deleteOneContact from './services/deleteContactService';
import addOneContact from './services/addContactService';
import EditContact from './components/EditContact/EditContact';

function App() {
  const[contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {
    try {
      const {data} = await addOneContact(contact);
      setContacts([...contacts, data])
    } catch (error) {}
  }

  const deleteContactHandler = async (id) => {
    try {
      await deleteOneContact(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {
      console.log("error...")
    }
  }

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
    }
    try {
        fetchContacts();
    } catch (error) {}
  }, []);

  return (
    <main className="App">
      <h1>Contact App</h1>
      <Switch>
        <Route path="/edit/:id" component={EditContact}/>
        <Route path="/user/:id" component={ContactDetail}/>
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

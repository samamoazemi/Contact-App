import { Route, Switch } from 'react-router-dom';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactDetail from './components/ContactDetail/ContactDetail';
import ContactList from './components/ContactList/ContactList';
import EditContact from './components/EditContact/EditContact';

function App() {
 
  return (
    <main className="App">
      {/* <h1>Contact App</h1> */}
      <Switch>
        <Route path="/edit/:id" component={EditContact}/>
        <Route path="/user/:id" component={ContactDetail}/>
        <Route path="/add" component={AddContact} />
        <Route path="/" component={ContactList} exact={true} />
      </Switch>
    </main>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import deleteOneContact from "../../services/deleteContactService";
import getContacts from "../../services/getContactsService";
import Contact from "./Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = (props) => {

  const [contacts, setContacts] = useState(null);
  const[searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
    }
    try {
        fetchContacts();
    } catch (error) {}
  }, []);

  const deleteContactHandler = async (id) => {
    try {
      await deleteOneContact(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {
      console.log("error...")
    }
  }

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value;
    const filteredContacts = contacts.filter((c) => {
      return Object.values(c)
      .join("")
      .toLowerCase()
      .includes(search.toLowerCase());
    })
    setContacts(filteredContacts);
  }

    return (
        <section>
          <div className={style.listHeader}>
            <h2>Contact List</h2>
            <Link to="/Add">
            <button className={style.addNewData}>Add</button>
            </Link>
          </div>
          <div>
            <input type="text" value={searchTerm} onChange={searchHandler} />
          </div>
          {contacts ? contacts.map((contact) => {
              return <Contact contact={contact} onDelete={deleteContactHandler} />;
          }) : <p>Loading ...</p>}
        </section>
    );
}
export default ContactList;
 
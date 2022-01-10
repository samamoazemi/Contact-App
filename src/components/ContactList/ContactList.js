import { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import deleteOneContact from "../../services/deleteContactService";
import getContacts from "../../services/getContactsService";
import Contact from "./Contact/Contact";
import style from "./ContactList.module.css";
import { FaUserPlus } from "react-icons/fa";

const ContactList = (props) => {

  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllContacts] = useState(null);
  const[searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
      setAllContacts(data);
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
    if(search !== ""){
      const filteredContacts = allContacts.filter((c) => {
        return Object.values(c)
        .join("")
        .toLowerCase()
        .includes(search.toLowerCase());
      })
      setContacts(filteredContacts);
    }else{
      setContacts(allContacts);
    }
    }

    return (
        <section className={style.mainWrapApp}>
          <div className={style.header}>
           <div className={style.listHeader}>
            <h3>Contact List</h3>
            <div className={style.searchContacts}>
             <input 
               type="text" 
               value={searchTerm} 
               onChange={searchHandler} 
               placeholder="search" />
            </div>
            <Link to="/Add">
             <button className={style.addNewData}><FaUserPlus/></button>
            </Link>
           </div>
         </div>
         <div className={style.contactsWrap}>
         {contacts ? contacts.map((contact) => {
              return( 
              <Contact contact={contact} onDelete={deleteContactHandler} />
              );
          }) : <p className={style.loadPart}>Loading ...</p>}
         
         </div>
        </section>
    );
}
export default ContactList;
 
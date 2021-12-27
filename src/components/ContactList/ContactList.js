import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
    return (
        <section>
          <div className={style.listHeader}>
            <h2>Contact List</h2>
            <Link to="/Add">
            <button className={style.addNewData}>Add</button>
            </Link>
          </div>
          {contacts.map((contact) => {
              return <Contact contact={contact} onDelete={onDelete} />;
          })}
        </section>
    );
}
export default ContactList;
 
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
    return (
        <section>
          <div>
            <h2>Contacts</h2>
            <Link to="/Add">
            <button className={style.addNewData}>Add</button>
            </Link>
          </div>
          {contacts.map((contact) => {
              const{ name, email, id } = contact
              return(
                    <div key={id} className={style.contactList}>
                        <div className={style.contactsData}>
                         <p> name : {name} </p>
                         <p> email : {email} </p>
                        </div>
                      <button onClick={() => onDelete(id)}>Delete</button>
                    </div>
              
              )
          })}
        </section>
    );
}
 
export default ContactList;
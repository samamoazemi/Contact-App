import { Link } from "react-router-dom";
import style from "./Contact.module.css";

const Contact = ({contact, onDelete}) => {
    const{ name, email, id } = contact;
    return ( 
        <div key={id} className={style.contactList}>
          <Link to={{ pathname:`/user/${id}`, state:{contact:contact}}}>
            <div className={style.contactsData}>
              <p> name : {name} </p>
              <p> email : {email} </p>
            </div>
          </Link>
          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
     );
}
 
export default Contact;
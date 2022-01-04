import { Link } from "react-router-dom";
import style from "./Contact.module.css";
import { FaUserEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";

const Contact = ({contact, onDelete}) => {
    const{ name, email, id } = contact;
    return ( 
        <div key={id} className={style.contactList}>
          <div className={style.detail}>
            <div>
             <Link to={{ pathname:`/user/${id}`, state:{contact:contact}}}>
               <div className={style.contactsData}>
                 <p> name : {name} </p>
                 <p> email : {email} </p>
               </div>
             </Link>
            </div>
            <div className={style.hide}>
               <Link to={`/edit/${id}`}>
                 <button className={style.editBtn}><FaUserEdit/></button>
               </Link>
               <button onClick={() => onDelete(id)}><FaTrash/></button>
              </div>
          </div>
        </div>
     );
}
 
export default Contact;
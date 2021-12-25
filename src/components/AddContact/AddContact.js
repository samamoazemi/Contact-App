import { useState } from "react";
import style from "./AddContact.module.css";

const AddContact = () => {
    const[contact, setContact] = useState({name: "", email:""});

    const changeHandler = (e) => {
        setContact({...contact,[e.target.name]: e.target.value})
    }
    
    const addContactHandler = (e) => {
        e.preventDefault();
        console.log("clicked")
    }

    return ( 
        <form onSubmit={addContactHandler}>
            <div className={style.formControl}>
                <label>name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={contact.name} 
                  onChange={changeHandler}
                />
            </div>
            <div className={style.formControl}>
                <label>email</label>
                <input 
                  type="text" 
                  name="email" 
                  value={contact.email} 
                  onChange={changeHandler}
                />
            </div>
            <button className={style.addContact} type="submit">Add Contact</button>
        </form>
     );
}
 
export default AddContact;
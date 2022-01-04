import { useState } from "react";
import addOneContact from "../../services/addContactService";
import style from "./AddContact.module.css";

const AddContact = ({history}) => {
    const[contact, setContact] = useState({name: "", email:""});

    const changeHandler = (e) => {
        setContact({...contact,[e.target.name]: e.target.value})
    }

    const submitForm = async (e) => {
        if(!contact.name || !contact.email){
            alert("all fields are mandatory !");
            return;
        }
        e.preventDefault();

        try {
            await addOneContact(contact);
            setContact({name: "", email: ""});
            history.push("/");
          } catch (error) {}
    }
    
    return ( 
            <form onSubmit={submitForm} className={style.addData}>
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
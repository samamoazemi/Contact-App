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
            <section className={style.addSection}>
               <form onSubmit={submitForm} className={style.addData}>
                  <h2 className={style.addtitle}>New Contact</h2>
                 <div className={style.formControl}>
                    <input 
                       type="text" 
                       name="name" 
                       value={contact.name} 
                       onChange={changeHandler}
                       placeholder="name"
                    />
                 </div>
                 <div className={style.formControl}>
                    <input 
                       type="text" 
                       name="email" 
                       value={contact.email} 
                       onChange={changeHandler}
                       placeholder="email"
                    />
                 </div>
                 <button className={style.addContact} type="submit">Add Contact</button>
              </form>
            </section>
     );
}
 
export default AddContact;
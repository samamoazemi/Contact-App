import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import style from "./EditContact.module.css";
import getOneContact from "../../services/getOneContact";

const EditContact = ({addContactHandler, history, match}) => {
    const[contact, setContact] = useState({name: "", email:""});

    const changeHandler = (e) => {
        setContact({...contact,[e.target.name]: e.target.value})
    }

    const submitForm = (e) => {
        if(!contact.name || !contact.email){
            alert("all fields are mandatory !");
            return;
        }
        e.preventDefault();
        addContactHandler(contact)
        setContact({name: "", email: ""});
        history.push("/");
    }

    useEffect(() => {
        const localFetch = async () => {
            try {
                const { data } = await getOneContact(match.params.id);
                setContact({ name:data.name, email:data.email });
            } catch (error) {}
        }
        localFetch();
    },[])
    
    return ( 
        <form onSubmit={submitForm}>
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
            <button className={style.addContact} type="submit">Edit Contact</button>
        </form>
     );
}
 
export default EditContact;
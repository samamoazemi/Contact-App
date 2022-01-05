import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import style from "./EditContact.module.css";
import getOneContact from "../../services/getOneContact";
import updateContact from "../../services/updateContact";

const EditContact = ({ history, match }) => {
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
            await updateContact(match.params.id, contact);
            history.push("/");
          } catch (error) {}
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
        <section className={style.editSection}>
         <form onSubmit={submitForm} className={style.editData}>
          <div className={style.formControl}>
                <input 
                  type="text" 
                  name="name" 
                  value={contact.name} 
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
            <button className={style.editContact} type="submit">Update Contact</button>
         </form>
        </section>
     );
}
 
export default EditContact;
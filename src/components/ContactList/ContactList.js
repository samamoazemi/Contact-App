import style from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
    return (
        <>
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
        </>
    );
}
 
export default ContactList;
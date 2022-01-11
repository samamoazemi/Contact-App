import { useReducer } from "react";
import { Link } from "react-router-dom";
import style from "./ContactDetail.module.css";
import userProfile from "../ContactDetail/photos/user.png";

const ContactDetail = ({location}) => {
    const {contact} = location.state;
    // console.log(props.location.state.contact);
    return ( 
        <section className={style.editSection}>
           <div className={style.details}>
              <div className={style.headerDetail}>
                <div>  <img src={userProfile} className={style.imgProfile}/>  </div>
              </div>
              <div className={style.contactDetail}>
                <p> {contact.name} </p>
                <p> {contact.email} </p>
              <Link to="/"><button>Contact List</button></Link>
              </div>
              </div>
        </section>
     );
}
 
export default ContactDetail;
import { Link } from "react-router-dom";
import style from "./ContactDetail.module.css";

const ContactDetail = ({location}) => {
    const {contact} = location.state;
    // console.log(props.location.state.contact);
    return ( 
        <div className={style.contactDetail}>
            <p> user name is : {contact.name} </p>
            <p> user email is : {contact.email} </p>
            <Link to="/"><button>contact list</button></Link>
        </div>
     );
}
 
export default ContactDetail;
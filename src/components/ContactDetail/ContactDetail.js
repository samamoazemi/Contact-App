import { Link } from "react-router-dom";

const ContactDetail = ({location}) => {
    const {contact} = location.state;
    // console.log(props.location.state.contact);
    return ( 
        <div>
            <p> user name is : {contact.name} </p>
            <p> user email is : {contact.email} </p>
            <Link to="/">go to contact list</Link>
        </div>
     );
}
 
export default ContactDetail;
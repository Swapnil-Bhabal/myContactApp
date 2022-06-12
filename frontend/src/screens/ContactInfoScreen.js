import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

const ContactInfoScreen = () => {
    let params = useParams();
    const [contact, setContact] = useState([]);

    useEffect(() => {
        const fetchContact = async () => {
            const { data } = await axios.get(`/api/contacts/${params.id}`);
            setContact(data);
        };

        fetchContact();
    }, [params]);

    return (
        <>
            <h1>Info Screen</h1>
            <h2>
                {`${contact.firstName} ${contact.contactNumber}`}
            </h2>
            <Link to={`/send/${contact._id}`}>
                <button>Send Message</button>
            </Link>
            
        </>
    )
}

export default ContactInfoScreen;
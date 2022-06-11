import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const ContactInfoScreen = () => {
    let params = useParams();
    const [contact, setContact] = useState([]);

    useEffect(() => {
        const fetchContact = async () => {
            const { data } = await axios.get(`/api/contact/${params.id}`);
            setContact(data);
        };

        fetchContact();
    }, [params]);

    return (
        <>
            <h1>Info Screen</h1>
            <h2>{`${contact.firstName} ${contact.contactNumber}`}</h2>
            <button>Send Message</button>
        </>
    )
}

export default ContactInfoScreen;
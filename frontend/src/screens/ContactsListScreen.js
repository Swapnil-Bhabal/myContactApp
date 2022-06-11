import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContactsListScreen = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            const { data } = await axios.get('/api/contacts');
            setContacts(data); 
        };
        
        fetchContacts();
    }, []);

    return (
        <>
            <h1>All Contacts</h1>
            <ul>
            {contacts.map((contact) => (
                        <li key={contact._id}>
                            <Link to={`/contact/${contact._id}`}>
                                {`${contact.firstName} ${contact.lastName}`}
                            </Link>
                        </li>
                )
            )}
            </ul>
        </>
    )
}


export default ContactsListScreen;
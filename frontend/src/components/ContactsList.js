import { useState, useEffect } from 'react';
import axios from 'axios';

const ContactList = () => {
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
                    <li key={contact._id}>{`${contact.firstName} ${contact.lastName}`}</li>
                )
            )}
            </ul>
        </>
    )
}


export default ContactList;
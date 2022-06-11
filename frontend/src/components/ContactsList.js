import { useState, useEffect } from 'react';
import axios from 'axios';

const ContactList = () => {
    const [contacts, setContacts] = useState();

    useEffect(() => {
        const fetchContact = async () => {
            const { data } = await axios.get('/api/contacts');
            setContacts(data); 
        };

        fetchContact();
    }, []);

    return (
        <>
            <h1>All Contacts</h1>
            <ul>
                {contacts.map((contact, key) => {
                    return (
                        <>
                            <li key={key}>{`${contact.firstName} ${contact.lastName}`}</li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}


export default ContactList;
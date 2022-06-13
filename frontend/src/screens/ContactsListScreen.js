import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import { 
    ListItem,
    UnorderedList,
    Heading,
    Link,
} from '@chakra-ui/react'

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
            <Heading fontSize='xl' color='black.500'>All Contacts</Heading>
            <UnorderedList>
            {contacts.map((contact) => (
                        <ListItem key={contact._id}>
                            <Link as={RouterLink} to={`/contact/${contact._id}`}>
                                {`${contact.firstName} ${contact.lastName}`}
                            </Link>
                        </ListItem>
                )
            )}
            </UnorderedList>
        </>
    )
}


export default ContactsListScreen;
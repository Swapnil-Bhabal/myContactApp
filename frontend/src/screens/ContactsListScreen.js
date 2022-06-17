import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import { 
    ListItem,
    UnorderedList,
    Link,
} from '@chakra-ui/react'
import Header from '../components/Header';
import Heading from '../components/Heading'

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
            <Header/>
            <Heading title='All Contacts'/>
            <UnorderedList margin="0">
            {contacts.map((contact) => (
                        <ListItem  listStyleType="none" bgColor="gray.800" color="white" fontSize="xl" p="3" key={contact._id}>
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
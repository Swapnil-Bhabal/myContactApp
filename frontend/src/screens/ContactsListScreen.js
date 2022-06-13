import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import { 
    ListItem,
    OrderedList,
    Link,
} from '@chakra-ui/react'
import Header from '../components/Header';

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
            <Header title={'All Contacts'}/>
            <OrderedList p="5">
            {contacts.map((contact) => (
                        <ListItem bgColor="gray.800" color="white" fontSize="2xl" p="3" key={contact._id}>
                            <Link as={RouterLink} to={`/contact/${contact._id}`}>
                                {`${contact.firstName} ${contact.lastName}`}
                            </Link>
                        </ListItem>
                )
            )}
            </OrderedList>
        </>
    )
}


export default ContactsListScreen;
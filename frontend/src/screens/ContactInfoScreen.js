import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from "react-router-dom";
import axios from 'axios';
import { 
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Heading,
    Link,
    Box,
    Button,
} from '@chakra-ui/react'

import Header from '../components/Header';

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
        <Header title={'Info Screen'}/>
            <Box bgColor="gray.800" color="white" fontSize="2xl" p="3" margin="5">
                {`${contact.firstName} ${contact.contactNumber}`}
            </Box>
            <Link as={RouterLink} to={`/send/${contact._id}`}>
                <Button margin="5">Send Message</Button>
            </Link>
            
        </>
    )
}

export default ContactInfoScreen;
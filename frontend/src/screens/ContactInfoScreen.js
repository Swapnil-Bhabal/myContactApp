import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from "react-router-dom";
import axios from 'axios';
import { 
    Link,
    Box,
    Button,
    UnorderedList,
    ListItem,
    Flex,
} from '@chakra-ui/react'

import Header from '../components/Header';
import Heading from '../components/Heading';

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
            <Header/>
            <Heading title={'Info Screen'}/>
            <UnorderedList bgColor="gray.800" color="white" fontSize="xl" p="3" margin="0">
                <ListItem listStyleType="none">
                {`Name : ${contact.firstName}`}
                </ListItem>
                <ListItem listStyleType="none">
                {`Number : ${contact.contactNumber}`}
                </ListItem>
            </UnorderedList>
            <Link as={RouterLink} to={`/send/${contact._id}`}>
                <Flex justifyContent="center">
                    <Button>Send Message</Button>
                </Flex>
            </Link>
        </>
    )
}

export default ContactInfoScreen;
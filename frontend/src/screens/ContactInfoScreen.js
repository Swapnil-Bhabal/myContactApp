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
} from '@chakra-ui/react'

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
            <Heading>Info Screen</Heading>
            <h2>
                {`${contact.firstName} ${contact.contactNumber}`}
            </h2>
            <Link as={RouterLink} to={`/send/${contact._id}`}>
                <button>Send Message</button>
            </Link>
            
        </>
    )
}

export default ContactInfoScreen;
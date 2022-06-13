import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';
import Header from '../components/Header';

const SendMessageScreen = () => {
    let params = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchContact = async () => {
            const { data } = await axios.get(`/api/contacts/${params.id}`);
            setUser(data);
        };

        fetchContact();
    }, [params]);

    const otp = Math.floor(100000 + Math.random() * 900000);
    
    
    return (
        <>
            <Header title={'Send Message Screen'}/>
            <form action='/api/contacts/message' method="post">
            <FormControl p="5">
                <FormLabel bgColor="gray.800" color="white" fontSize="xl" p="3">User Id</FormLabel><Input type="text" name="_id" value={`${user._id}`}/>
                <FormLabel bgColor="gray.800" color="white" fontSize="xl" p="3">User Name</FormLabel><Input type="text" name="name" value={`${user.firstName}`}/>
                <FormLabel bgColor="gray.800" color="white" fontSize="xl" p="3">Otp</FormLabel><Input type="text" name="otp" value={`${otp}`}/>
                <FormLabel bgColor="gray.800" color="white" fontSize="xl" p="3">Message</FormLabel><Input type="text" name="message" value={`Hi ${user.firstName}, your OTP is: ${otp}`}/>
                <Button type='submit' mt="2">Send</Button>
            </FormControl>
            </form>
            
        </>
    )
}

export default SendMessageScreen;
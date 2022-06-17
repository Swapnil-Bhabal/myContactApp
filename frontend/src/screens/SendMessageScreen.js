import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';
import Header from '../components/Header';
import Heading from '../components/Heading';

const SendMessageScreen = () => {
    let history = useNavigate();
    
    let params = useParams();
    const [user, setUser] = useState([]);
    const otp = Math.floor(100000 + Math.random() * 900000);

    useEffect(() => {
        const fetchContact = async () => {
            const { data } = await axios.get(`/api/contacts/${params.id}`);
            setUser(data);
        };

        fetchContact();
    }, [params]);

    async function populateHistory(e) {
        e.preventDefault();
        await axios.post(`/api/contacts/message`, {
        name: user.firstName,
        otp: otp,
        message: `Hi ${user.firstName}, your OTP is: ${otp}`,
        _id: user._id
       })
       .then(res => {
        if (res.status === 200) {
            history("/dashboard");
        }
        console.log(res)
        })
       .catch(err => console.log(err))

       
    }

    
    
    
    return (
        <>
            <Header/>
            <Heading title={'Send Message Screen'}/>
            <form onSubmit={populateHistory}>
                <FormControl p="5">
                    <FormLabel bgColor="gray.800" color="white" fontSize="xl" p="3">User Id</FormLabel><Input type="text" value={`${user._id}`}/>
                    <FormLabel bgColor="gray.800" color="white" fontSize="xl" p="3">User Name</FormLabel><Input type="text" value={`${user.firstName}`}/>
                    <FormLabel bgColor="gray.800" color="white" fontSize="xl" p="3">Otp</FormLabel><Input type="text" value={`${otp}`}/>
                    <FormLabel bgColor="gray.800" color="white" fontSize="xl" p="3">Message</FormLabel><Input type="text" value={`Hi ${user.firstName}, your OTP is: ${otp}`}/>
                    <Button type='submit' mt="2">Send</Button>
                </FormControl>
            </form>
        </>
    )
}

export default SendMessageScreen;
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

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
            <h1>Send Message Screen</h1>
            <form action='/send' method="post">
                <input type="text" name="message" value={`Hi ${user.firstName}, your OTP is: ${otp}`}/>
                <input type="submit" value="Send"/>
            </form>
            
        </>
    )
}

export default SendMessageScreen;
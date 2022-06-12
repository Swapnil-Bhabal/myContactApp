import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

const SendMessageScreen = () => {
    let params = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchContact = async () => {
            const { data } = await axios.get(`/api/contact/${params.id}`);
            setUser(data);
        };

        fetchContact();
    }, []);
    
    return (
        <>
            <h1>Send Message Screen</h1>
            <input type="text" value={`Hi ${user.firstName}, your OTP is: 123456`}/>
            <button type="submit">Send</button>
        </>
    )
}

export default SendMessageScreen;
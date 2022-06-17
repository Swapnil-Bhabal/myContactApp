import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Heading from '../components/Heading'
import axios from 'axios';
import { UnorderedList, ListItem, Flex } from '@chakra-ui/react';

const DashboardScreen = () => {
    // ${contact.deliveredAt} ${contact.otp}
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/api/otp');
            setUserData(data);
            console.log(data);
        };
        
        fetchData();
    }, []);
    return (
        <>
            <Header/>
            <Heading title={'Dashboard Screen'}/>
            <UnorderedList margin="0" listStyleType="none" bgColor="gray.800" color="white" fontSize="xl" p="4">
            <Flex flexDirection="row" justifyContent="space-between">
                            <ListItem listStyleType="none" fontWeight="bold">Name</ListItem>
                            <ListItem listStyleType="none" fontWeight="bold">Time</ListItem>
                            <ListItem listStyleType="none" fontWeight="bold">Otp</ListItem>
            </Flex>
            {userData.map((contact) => (
                    <Flex flexDirection="row" justifyContent="space-between">
                        <ListItem  listStyleType="none" bgColor="gray.800" color="white" fontSize="xl" key={contact._id}>
                                {`${contact.firstName}`}
                        </ListItem>
                        <ListItem  listStyleType="none" bgColor="gray.800" color="white" fontSize="xl" key={contact._id}>
                                {`${contact.deliveredAt}`}
                        </ListItem>
                        <ListItem  listStyleType="none" bgColor="gray.800" color="white" fontSize="xl" key={contact._id}>
                                {`${contact.otp}`}
                        </ListItem>
                    </Flex>
                )
            )}
            </UnorderedList>
        </>
    )
}

export default DashboardScreen;
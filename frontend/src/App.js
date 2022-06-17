import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';

import "./App.css"
import ContactsListScreen from "./screens/ContactsListScreen";
import ContactInfoScreen from "./screens/ContactInfoScreen";
import SendMessageScreen from './screens/SendMessageScreen';
import DashboardScreen from './screens/DashboardScreen';


function App() {
  return (
    <Router>
    <Flex justifyContent="center" alignItems="center">
        <Box width="2xl" border="2px" borderColor="blue.900" mt="5">
          <Routes>
            <Route path="/" exact element={<ContactsListScreen/>}/>
            <Route path="/contact/:id" element={<ContactInfoScreen/>}/>
            <Route path="send/:id" element={<SendMessageScreen/>}/>
            <Route path="/dashboard" element={<DashboardScreen/>}/>
          </Routes>
        </Box>
    </Flex>
    </Router>
  );  
}

export default App;

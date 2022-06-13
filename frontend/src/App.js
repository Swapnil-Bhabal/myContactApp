import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import "./App.css"
import ContactsListScreen from "./screens/ContactsListScreen";
import ContactInfoScreen from "./screens/ContactInfoScreen";
import SendMessageScreen from './screens/SendMessageScreen';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ContactsListScreen/>}/>
        <Route path="/contact/:id" element={<ContactInfoScreen/>}/>
        <Route path="send/:id" element={<SendMessageScreen/>}/>
        
      </Routes>
    </Router>
  );  
}

export default App;

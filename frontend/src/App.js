import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ContactsListScreen from "./screens/ContactsListScreen";
import ContactInfoScreen from "./screens/ContactInfoScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ContactsListScreen/>}/>
        <Route path="/contact/:id" element={<ContactInfoScreen/>}/>
      </Routes>
    </Router>
  );  
}

export default App;

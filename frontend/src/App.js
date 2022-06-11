import ContactsListScreen from "./screens/ContactsListScreen";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ContactsListScreen/>}/>
      </Routes>
    </Router>
  );  
}

export default App;

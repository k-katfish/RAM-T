//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navigation'
import Home from './pages/index'
import Locations from './pages/locations'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/locations' element={<Locations />} />
      </Routes>
    </Router>
  );
}

export default App;

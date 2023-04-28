//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navigation'
import Home from './pages/index'
import Locations from './pages/locations'
import Rooms from './pages/rooms'
import { CreateLocation } from './pages/createlocation';
import { CreateRoom } from './pages/createroom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/rooms/*' element={<Rooms />} />
        <Route path='/createlocation' element={<CreateLocation />} />
        <Route path='/createroom' element={<CreateRoom />} />
      </Routes>
    </Router>
  );
}

export default App;

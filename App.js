import {BrowserRouter, Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Appointment from './Pages/appointment';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path='/Appointment' element = {<Appointment/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

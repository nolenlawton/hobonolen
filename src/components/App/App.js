import Nav from '../Nav/Nav';
import AboutMe from '../AboutMe/AboutMe';
import Portfollio from '../Portfollio/Portfollio';
import Contact from '../Contact/Contact';
import { Route, Routes } from 'react-router';
import './App.css'

function App() {
  return (
    <div id='App'>
      <Nav />  

      <Routes>

        <Route exact path='/' element={<AboutMe/>} />

        <Route exact path='/portfollio' element={<Portfollio/>} />

        <Route exact path='/contact' element={<Contact/>} />

      </Routes>

    </div>
  );
}

export default App ;
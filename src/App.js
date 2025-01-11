
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {




  return (
    <>
      <BrowserRouter basename='/myportfolio'>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App;

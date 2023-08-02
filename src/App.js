
// import './App.css';
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
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/about" element={<About/>}/>
        
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App;

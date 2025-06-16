import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Navibar from './components/Navibar';
import Home from './pages/home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AccessibilityStatement from './pages/AccessibilityStatement';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Navibar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/accessibility-stetament" element={<AccessibilityStatement/>}/>
      </Routes>
    </>
  )
}

export default App

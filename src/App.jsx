import './css/App.css';
import ScrollToTop from './components/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import Navibar from './components/Navibar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AccessibilityStatement from './pages/AccessibilityStatement';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="app-root">
    <ScrollToTop />
      <header>
        <Navibar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© 2025 Miia-Maria Stenius</p>
      </footer>
    </div>
  )
}

export default App

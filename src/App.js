import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './Pages/Main';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/main-page" element={<MainPage />} />
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      < Footer />
    </div>
  );
}

export default App;

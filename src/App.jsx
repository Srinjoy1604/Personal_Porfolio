import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Homepage from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import SocialBut from './components/SocialButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className='min-h-[100vh] overflow-hidden w-[100vw]'>
        <Navbar />
        <SocialBut />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


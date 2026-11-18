import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import SkillsList from './SkillsList';
import About from './About';

function App() {
  function linkStyle({ isActive }) {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      marginRight: '12px',
    };
  }

  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/skills" style={linkStyle}>
          Skills
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillsList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

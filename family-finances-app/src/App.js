import './App.css';
import Home from './Home';
import Registration from './User/Registration';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Registration />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={styles.navbar}>
      <div 
        style={styles.burgerIcon} 
        onMouseDown={toggleMenu} 
      >
        &#9776; {/* Burger bar icon */}
      </div>
      {isOpen && (
        <ul 
          style={styles.menu} 
        >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Register">Register</Link></li>
        </ul>
      )}
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'relative',
    backgroundColor: 'white',
  },
  burgerIcon: {
    fontSize: '30px',
    cursor: 'pointer',
  },
  menu: {
    position: 'absolute',
    top: '40px',
    left: '0',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    listStyle: 'none',
    padding: '10px',
    margin: '0',
  },
};

export default App;
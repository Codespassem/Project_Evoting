import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#33587A', padding: '10px 20px' }}>
      <ul style={{ 
        listStyle: 'none', 
        padding: 0, 
        margin: 0, 
        display: 'flex', 
        gap: 15, 
        alignItems: 'center',
        color: '#fff'
      }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li>
          About Us ▼
          {/* You can implement dropdown menu here */}
        </li>
        <li>
          Group Sites ▼
          {/* Dropdown */}
        </li>
        <li><Link to="/registration" style={{ color: '#fff', textDecoration: 'none' }}>Registration</Link></li>
        <li><Link to="/help" style={{ color: '#fff', textDecoration: 'none' }}>Help</Link></li>
        <li>
          Contact Us ▼
          {/* Dropdown */}
        </li>
        <li><Link to="/terms" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Use</Link></li>
        <li><Link to="/sitemap" style={{ color: '#fff', textDecoration: 'none' }}>Sitemap</Link></li>
        <li>
          <input type="search" placeholder="Search" style={{ borderRadius: 3, border: 'none', padding: '5px' }} />
          <button>🔍</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

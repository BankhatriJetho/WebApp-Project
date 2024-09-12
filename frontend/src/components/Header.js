// src/components/Header.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import './header.css';

const Header = ({ onSearch }) => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <Link to="/" className="home-icon">
            🏠
          </Link>
        </div>
        <div className="header-center">
          <h1>Asian General Market</h1>
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="header-right">
          <Link to="/shoppinglist" className="shopping-list button-style">Shopping List</Link>
          <Link to="/admin" className="admin-dashboard">Admin</Link>
          <button className="theme-toggle button-style" onClick={toggleTheme}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import '../../app.css';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => (
  <div className="app-header">
    <div className="header-name">Etherbaed</div>
    <div className="header-links">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/media">Media</Link>
      <Link to="/news">News</Link>
    </div>
  </div>
);

export default Header;

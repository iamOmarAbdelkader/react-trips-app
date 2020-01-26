import React from 'react';
import './Header.css';
import Logo from '../../logo.png';
function Header() {
  return (
    <div className="Header">
        <div>
           <img src={Logo} alt="logo" /> 
        </div>
    </div>
  );
}

export default Header;

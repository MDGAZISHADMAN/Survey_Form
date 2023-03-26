import React from 'react';
import './Header.css';
import GAZI from "./gazi.jpg"
import LOGO from "./logo.jpg"
function Header() {
  return (
<>
<div className='mainContainer'>
    <div className='header'>
    <img className='logopic' src={LOGO}  />
        <h3 className='Title'>SURVEY OF INDIA</h3>
        <img  src={GAZI} className='propic' />
        
    </div>
    <div className='sidebar'>
    <i class='bx bx-home-alt-2'></i>
    <i class='bx bxs-group'></i>
    <i class='bx bx-align-left'></i>
    </div>
      </div>
</>
  );
}
export default Header 
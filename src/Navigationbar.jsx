import React from 'react';
import './Navigationbar.css';
import {Navbar,Container, Row, Col } from 'react-bootstrap';

function Navigationbar() {
  return (
   
    <section className='navbar'>
        <a href="/" className='navbar-item'>HOME</a>
        <a href="/" className='navbar-item'>SEARCH</a>
        <a href="/" className='navbar-item'>ABOUT</a>      
        <a href="/" className='navbar-item'>CONTACT US</a>
     </section>
  );
};

export default Navigationbar;

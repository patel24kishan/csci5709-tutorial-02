import React from 'react';
import './Navigationbar.css';
import {Navbar,Container, Row, Col } from 'react-bootstrap';

function Navigationbar() {
  return (
    //   <Navbar>
    //       <Container bg="dark" variant="dark">
        
    //         <nav class="navigationBar bg-myBlack ">

    //             <div class="collapse navbar-collapse" id="navbarNav">
    //                 <ul class="navbar-nav">
    //                 <li class="nav-item active">
    //                     <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link" href="#">SEARCH</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link" href="#">ABOUT</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link" href="#">CONTACT US</a>
    //                 </li>
    //                 </ul>
    //             </div>
    //         </nav>
    //     </Container>
    // </Navbar>
    <section className='navbar'>
        <a href="/" className='navbar-item'>HOME</a>
        <a href="/" className='navbar-item'>SEARCH</a>
        <a href="/" className='navbar-item'>ABOUT</a>      
        <a href="/" className='navbar-item'>CONTACT US</a>
     </section>
  );
};

export default Navigationbar;

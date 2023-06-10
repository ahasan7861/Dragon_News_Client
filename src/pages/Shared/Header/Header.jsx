import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../../firebase/firebase.config';

const Header = () => {
  const [user, setUser] = useState(null)

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // const handleGoogleLogin =() =>{
  //   signInWithPopup(auth, provider)

  //   .then((result) =>{
  //     const loggedInUser = result.user;
  //     console.log(loggedInUser)
  //     setUser(loggedInUser)
  //   })
  //   .catch((error) =>{
  //     const errorMessage = error.message;
  //     console.log("error", errorMessage)
  //   })
  // }



    return (
        <Container className='mt-4'>
             <div className='text-center'>
            <img src={logo} alt="" />
            <p className='text-secondary'><small>Journalism Without Fear And Favor</small></p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>


        <div className='d-flex'>
        <Button variant="danger bg-dark text-white border border-black">Breaking News</Button>
        <Marquee className='bg-dark text-white' speed={50} pauseOnHover={true} gradientWidth={0} ># Sylhet engineer threatened over power outage, complaint filed with police......... #Australia rescues Indonesian fishermen from desert island after cyclone......... #Bangladesh reports 5 new COVID cases, no deaths in a day.........


            </Marquee>
        </div>



        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            

            <Button variant="secondary">Login</Button>
            </Nav.Link>

            {/* <p>user: {user?.displayName}</p>
            <img src={user?.photoURL} alt="" srcset="" /> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>








        </Container>
    );
};

export default Header;
import React, { useContext } from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { CounterContext } from './counterContext';


const Header=()=> {
      const { count} = useContext(CounterContext);

        return (
      <>
      
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Shop</Navbar.Brand>
          <Nav className="me-auto">
                  <NavLink className="nav-link" to="home">Home</NavLink>
                  <NavLink className="nav-link" to="contact">Contact Us</NavLink>
                  <NavLink className="nav-link" to="/products">Products </NavLink>
                  <h1 className='text-light'>{count}</h1>
          </Nav>
        </Container>
      </Navbar>
      </>
        );
    }


export default Header;

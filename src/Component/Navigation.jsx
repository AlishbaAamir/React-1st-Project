import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
 <Navbar expand="lg" style={{backgroundColor: '#91194b'}}>
      <Container fluid>
        <Navbar.Brand className='fw-bold fs-4' href="#home"><i className="fa-solid fa-store"></i>Shopper's Delight</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='mx-2 my-2 text-decoration-none text-dark' >Home</Link>
            <Link to="/products" className='mx-2 my-2 text-decoration-none text-dark'>Product</Link>
            <Link to="/about"  className='mx-2 my-2 text-decoration-none text-dark'>About</Link>
             <Link to="/login" className='mx-2 my-2 text-decoration-none text-dark'>Login </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className='py-2'>
          {/* <Button className='mx-2' variant="outline-secondary"><Link to="/login" className='mx-2 my-2 text-decoration-none text-dark' >Login</Link></Button> */}
          <Button className='mx-2' variant="outline-secondary"><Link to="*" className='mx-2 my-2 text-decoration-none text-dark' >Register</Link></Button>
          <Button className='mx-2' variant="outline-secondary"><Link to="/login" className='mx-2 my-2 text-decoration-none text-dark' ><i className='fa-solid fa-cart-shopping'></i></Link></Button>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>



       </>
  )
}

export default Navigation
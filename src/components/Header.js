import React from "react";
import { Nav, NavDropdown, Form, FormControl, Button, Navbar } from "react-bootstrap/";
import animal from './../animal.icon.png';



function Header() {
  return (
    <React.Fragment>
    
      <Navbar bg="light" expand="lg" className='nav'>
  <Navbar.Brand href="/"><img src={animal} alt='animal'/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="About" id="basic-nav-dropdown">
        <NavDropdown.Item href="/missionstatement">Our Mission</NavDropdown.Item>
        <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/newanimals">Add Kitty for Adoption</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

      <div className="header1">
       <img src='./../animalheader.png' alt='header'/>
        <hr />
      </div>

    </React.Fragment>
  );
}

export default Header;

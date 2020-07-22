import React from "react";
import { Nav, NavDropdown, Form, FormControl, Button, Navbar } from "react-bootstrap/";
import animal from './../animal.icon.png';

function Header() {
  return (
    <React.Fragment>

    {/* <div className="navbar">
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
      </Nav>

      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>

      <NavDropdown
        title="Services"
        variant="outline-success"
        id="nav-dropdown"
        className="dropdown"
        activeKey="/home">

        <NavDropdown.Item eventKey="4.1" href="/">
          Home
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3" >
          Our Mission
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4" href="/newanimals">Add New Cat</NavDropdown.Item>
      </NavDropdown>
      </Navbar.Collapse> */}
    
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img src={animal}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

      <div className="header1">
        <h1>Urban Tails Shelter</h1>
        <p> Giving them a happy life.😸</p>
        <hr />
      </div>

    </React.Fragment>
  );
}

export default Header;

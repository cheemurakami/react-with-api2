import React from "react";
import {Nav} from "react-bootstrap/";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>

      <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Search</Nav.Link>
    </Nav.Item>
    </Nav>

    <div className="header1">
      <h1>Urban Tails Shelter</h1>
      <p> Giving them a happy life.😸</p>
      <hr />
    </div>
    </React.Fragment>
  );
}

export default Header;

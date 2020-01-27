import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    componentDidMount() {
    }
    render() {
      return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">Richard Wei</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="navButton" as={Link} to="/">Home</Nav.Link>
              <Nav.Link className="navButton" as={Link} to="/artwork">Artwork</Nav.Link>
              <Nav.Link className="navButton" as={Link} to="/programming">Programming</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="navButton" as={Link} to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
}
 
export default Navigation
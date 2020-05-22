import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Pokedex" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/kanto">Generation I</NavDropdown.Item>
                            <NavDropdown.Item href="/jotho">Generation II</NavDropdown.Item>
                            <NavDropdown.Item href="/hoenn">Generation III</NavDropdown.Item>
                            <NavDropdown.Item href="/sinnoh">Generation IV</NavDropdown.Item>
                            <NavDropdown.Item href="/unova">Generation V</NavDropdown.Item>
                            <NavDropdown.Item href="/kalas">Generation VI</NavDropdown.Item>
                            <NavDropdown.Item href="/alola">Generation VII</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

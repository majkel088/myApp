import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
export const NavigationBar = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

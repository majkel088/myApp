import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';

export default class NavigationBar extends Component {
    
    state = {
        msg: "",
    };
    

    componentDidMount = () => {
        axios.get('/loggin').then(response => {
            this.setState({
                msg: response.data
            });
        });
    };

    singOut = (e) => {
        e.preventDefault();
        axios.get('/logout');
        return window.location.href = "http://localhost:3000/";
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/home">PokeAPI</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home" >Strona Główna</Nav.Link>
                        <Nav.Link href="/about">O nas</Nav.Link>
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
                    <Nav>
                        <Dropdown as={ButtonGroup}>
                            <Button variant="success" href="/">{this.state.msg}</Button>
                            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item href="/" onClick={this.singOut}>Wyloguj się</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

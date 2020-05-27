import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Media from 'react-media';
import Row from 'react-bootstrap/Row';
import First from './Section/First';
import Second from './Section/Second';
import Third from './Section/Third';
import { Link } from "react-scroll";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Media query="(max-width: 768px)" render={() =>
                    (
                        <Row>
                            <div className="col-12">
                                <Nav defaultActiveKey="/home" className="flex-row centere">
                                    <Nav.Link><Link activeClass="active" to="first" spy={true} smooth={true} offset={-70} duration={500}>Typy pokemonów</Link></Nav.Link>
                                    <Nav.Link><Link activeClass="active" to="second" spy={true} smooth={true} offset={-70} duration={500}>Gymy</Link></Nav.Link>
                                    <Nav.Link><Link activeClass="active" to="third" spy={true} smooth={true} offset={-70} duration={500}>Teamy</Link></Nav.Link>
                                </Nav>
                            </div>
                            <div className="col-12 img">
                                <First/>
                                <Second/>
                                <Third/>
                            </div>
                        </Row>
                    )}
                />
                <Media query="(min-width: 768px)" render={() =>
                    (
                        <Row>
                            <div className="col-2">
                                <Nav defaultActiveKey="/home" className="flex-column centere">
                                    <Nav.Link><Link activeClass="active" to="first" spy={true} smooth={true} offset={-70} duration={500}>Typy pokemonów</Link></Nav.Link>
                                    <Nav.Link><Link activeClass="active" to="second" spy={true} smooth={true} offset={-70} duration={500}>Gymy</Link></Nav.Link>
                                    <Nav.Link><Link activeClass="active" to="third" spy={true} smooth={true} offset={-70} duration={500}>Teamy</Link></Nav.Link>
                                </Nav>
                            </div>
                            <div className="col-10">
                                <First/>
                                <Second/>
                                <Third/>
                            </div>
                        </Row>
                    )}
                />
            </div>
        );
    }
}
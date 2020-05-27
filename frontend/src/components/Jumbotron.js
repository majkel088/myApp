import React, { Component } from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import Media from 'react-media';

export default class Jumbotron extends Component {
    render() {
        return (
            <div>
                <Media query="(max-width: 768px)" render={() =>
                    (
                        <Jumbo fluid className="jumbo col-12">
                            <div className="overlay"></div>
                            <Container style={{textAlign: 'center'}}>
                                <h1>Welcome</h1>
                                <p>Learn to code from my YouTube videos</p>
                            </Container>
                        </Jumbo>
                    )}
                />
                <Media query="(min-width: 768px)" render={() =>
                    (
                        <Jumbo fluid className="jumbo">
                            <div className="overlay"></div>
                            <Container>
                                <h1>Welcome</h1>
                                <p>Learn to code from my YouTube videos</p>
                            </Container>
                        </Jumbo>
                    )}
                />
            </div>
        );
    }
}
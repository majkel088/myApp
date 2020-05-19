import React, { Component } from 'react';
import axios from 'axios';

export default class Test extends Component {
    state = {
        msg: "HELLO TEAM",
    };

    handleButtonClick = () => {
        axios.post('/asdf').then(response => {
            this.setState({
                msg: response.data
            });
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick} >Click there!</button>
                <h1>{this.state.msg}</h1>
            </div>
        );
    }
}

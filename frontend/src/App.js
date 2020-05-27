import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style/style.css';
import Home from './components/Home';
import About from './components/About';
import Kanto from './components/Pokedex/Kanto';
import Jotho from './components/Pokedex/Jotho';
import Hoenn from './components/Pokedex/Hoenn';
import Sinnoh from './components/Pokedex/Sinnoh';
import Unova from './components/Pokedex/Unova';
import Kalas from './components/Pokedex/Kalas';
import Alola from './components/Pokedex/Alola';
import Login from './components/loginSys/Login';
import Register from './components/loginSys/Register';
import { Layout } from './components/Layout';
import NavigationBar from './components/NavigationBar';
import ScrollUpButton from "react-scroll-up-button";
import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/kanto" component={Kanto} />
              <Route path="/jotho" component={Jotho} />
              <Route path="/hoenn" component={Hoenn} />
              <Route path="/sinnoh" component={Sinnoh} />
              <Route path="/unova" component={Unova} />
              <Route path="/kalas" component={Kalas} />
              <Route path="/alola" component={Alola} />
            </Switch>
          </Router>
          <ScrollUpButton />
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;

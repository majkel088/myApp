import React, { Component } from 'react';
//import Test from './test';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import About from './components/About';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;

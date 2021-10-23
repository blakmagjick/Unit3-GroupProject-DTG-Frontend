import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'
import AllGamers from './AllGamers'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Navigation />
        <Switch>
          <Route path="/about" exact component={() => <About />} />
          <Route path="/gamers" exact component={() => <AllGamers />} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;

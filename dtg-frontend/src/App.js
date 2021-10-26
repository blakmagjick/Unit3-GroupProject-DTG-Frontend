import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'
import AllGamers from './AllGamers'
import Login from './Login'
import NewUser from './NewUser'


let baseURL = 'http://localhost:3000'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      gamers: []
    }
  }

  getGamers = () => {
    fetch(baseURL + '/gamers')
    .then(response => {
      return response.json()
      }) 
    .then(data => {
      console.log(data)
      this.setState({
        gamers: data
      })
    })
  }

  addGamer = (newGamer) => {
    const copyGamers = [...this.state.gamers]
    copyGamers.push(newGamer)
    this.setState({
      gamers: copyGamers
    })
  }

  componentDidMount(){
    this.getGamers()
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Navigation />
          <Switch>
            <Route path="/about" exact component={() => <About />} />
            <Route path="/login" exact component={() => <Login />} />
            <Route path="/addgamer" exact component={() => <NewUser baseURL={baseURL} addGamer={this.addGamer}/>} />
            <Route path="/gamers" exact component={() => <AllGamers gamers={this.state.gamers}/>} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;

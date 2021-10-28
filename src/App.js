import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'
import AllGamers from './AllGamers'
import Login from './Login'
import Logout from './Logout'
import SignUp from './SignUp'
import NewUser from './NewUser'
import Profile from './Profile'

let baseURL = process.env.REACT_APP_BASEURL

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      gamers: []
    }
  }

  getGamers = () => {
    fetch(baseURL + '/gamers', {
      credentials: 'include'
    })
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        return []
      }
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
    // console.log(baseURL)
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Navigation />
          <Switch>
            <Route path="/about" exact component={() => <About />} />
            <Route path="/signup" exact component={() => <SignUp />} />
            <Route path="/login" exact component={() => <Login />} />
            <Route path="/logout" exact component={() => <Logout />} />
            <Route path="/addgamer" exact component={() => <NewUser baseURL={baseURL} addGamer={this.addGamer}/>} />
            <Route path="/gamers" exact component={() => <AllGamers gamers={this.state.gamers}/>} />
            <Route path="/profile" exact component={() => <Profile profile={this.state.gamers}/>} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'
import AllGamers from './AllGamers'
import Login from './Login'
import SignUp from './SignUp'
import Profile from './Profile'
import Logout from './Logout'

let baseURL = process.env.REACT_APP_BASEURL

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      username: 'Gamer',
      password: '',
      name: '',
      age: '',
      profilePic: '',
      location: '',
      userLoggedIn: false,
    }
  }


getUsers = () => {
  // fetch from the backend
  fetch(baseURL + '/users', {
    credentials: 'include'
  })
  .then(res => {
    if(res.status === 200) {
      return res.json()
    } else {
      return []
    }
  })
  .then(data => {
    console.log(data)
    this.setState({
      users: data
    })
  })
}

// signup
signupUser = async (e) => {
  e.preventDefault()
  const url = baseURL + '/users/signup'
  try {
      const response = await fetch(url, {
          method: 'POST', 
          body: JSON.stringify({
              username: e.target.username.value,
              password: e.target.password.value,
              name: e.target.name.value,
              age: e.target.age.value,
              profilePic: e.target.profilePic.value,
              location: e.target.location.value,
              faveGames: e.target.faveGames.value
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      if (response.status === 201) {
          this.getUsers()
          console.log('🏄‍♀️ signup successful! 🏄‍♂️')
          window.location='/login'
      }
  }
  catch (error) {
      console.log('Error => ', error)
  }
}

// login 
loginUser = async (e) => {
    console.log('loginUser')
    e.preventDefault()

    const url = baseURL + '/users/login'
    const loginBody = {
        username: e.target.username.value,
        password: e.target.password.value,      
    }
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(loginBody),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })

        if(response.status === 200) {
            this.getUsers()
            console.log('🌈 login successful!🌈')
            this.setState({
                username: e.target.username.value,
                password: e.target.password.value,
                userLoggedIn: true
            })
            window.location='/gamers'
        }
    }
    catch (error) {
        console.log('Error => ', error)
    }

}
getGamers = () => {
  fetch(baseURL + '/users', {
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
      users: data
    })
  })
  console.log()
}

deleteUser = (id) => {
  // console.log(id)
  fetch(baseURL + '/users/' + id, {
  method: 'DELETE',
  credentials: "include"
}).then( res => {
  const findIndex = this.state.users.findIndex(user => user._id === id)
  const copyUsers = [...this.state.users]
  copyUsers.splice(findIndex, 1)
  this.setState({
    users: copyUsers
  })
})
}

  getUserById = (id) => {
    fetch(this.props.baseURL + '/users/' + id,  {
      credentials: 'include'
    })
    .then(response => {
      const user = this.state.users.find(user => user._id === id)
      if (response.status === 200) {
        console.log(response)
        return user
      } else {
        return []
      }
      }) 
    .then(data => {
      console.log(data)
      this.setState({
        users: data
      })
    })
  }

  addGamer = (newGamer) => {
    const copyGamers = [...this.state]
    copyGamers.push(newGamer)
    this.setState({
      users: copyGamers
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
        <Navigation username={this.state.username} userLoggedIn={this.state.userLoggedIn}/>
          <Switch>
            <Route path="/about" exact component={() => <About />} />
            <Route path="/signup" exact component={() => <SignUp getUsers={this.getUsers} signupUser={this.signupUser} />} />
            <Route path="/login" exact component={() => <Login loginUser={this.loginUser}/>} />
            <Route path="/logout" exact component={() => <Logout />} />
            <Route path="/gamers" exact component={() => <AllGamers users={this.state.users}/>} />
            <Route path="/profile/:id" exact component={() =>   <Profile deleteUser={this.deleteUser} profiles={this.state.users} /> }/>  
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
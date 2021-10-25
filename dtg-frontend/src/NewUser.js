import React, { Component } from 'react';


export default class NewUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            profilePic: '',
            age: '',
            location: '',
            faveGames: ''
        }
    }

    handleChange = (event) => {
        const value = event.target.value
        this.setState({
            [event.target.name]: value
        })
      }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(this.props.baseURL + '/gamers', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                profilePic: this.state.profilePic,
                age: this.state.age,
                location: this.state.location,
                faveGames: this.state.faveGames
            }),
            headers: {
            'Content-Type': 'application/json'
            },
        })
        .then(response => {
            return response.json()
        })
        .then( data => {
            console.log(data)
            this.props.addGamer(data)
            this.setState({
                name: '',
                profilePic: '',
                age: '',
                location: '',
                faveGames: ''
            })
        }).catch (error => console.error({'Error': error}))
    }

    render(){
        return(
            <React.Fragment>
                <h2>Ready Player One?</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' onChange={(event) => this.handleChange(event)} ></input><br />
                    <label htmlFor='profilePic'>Avatar:</label>
                    <input type='text' id='profilePic' name='profilePic' onChange={(event) => this.handleChange(event)}></input><br />
                    <label htmlFor='age'>Age:</label>
                    <input type='number' id='age' name='age' onChange={(event) => this.handleChange(event)}></input><br />
                    <label htmlFor='location'>Location:</label>
                    <input type='text' id='location' name='location' onChange={(event) => this.handleChange(event)}></input><br />
                    <label htmlFor='faveGames'>Fave Games:</label>
                    <input type='text' id='faveGames' name='faveGames' onChange={(event) => this.handleChange(event)}></input><br />
                    <input type='submit' value='Create Profile' />
                </form>
            </React.Fragment>
        )
    }
}
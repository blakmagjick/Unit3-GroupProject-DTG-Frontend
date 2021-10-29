import React, { Component } from 'react';

export default class MyProfile extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    editUser = () => {

    }

    render(){
        return (
            <div> 
                <h4>My Profile</h4>
                <img src={this.props.profile[0].profilePic} width='150px' alt='UserPic'/>
                <aside>{this.props.profile[0].name}</aside>
                <aside>{this.props.profile[0].location}</aside>
                <aside>{this.props.profile[0].faveGames}</aside>
                <button>Edit</button>
                <button onClick={() => this.props.deleteGamer(this.props.gamers[0])}>Delete</button>
            </div>
        )
    }
    
}
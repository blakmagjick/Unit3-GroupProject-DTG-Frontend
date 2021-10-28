import React, { Component } from 'react';
import SearchGamer from './SearchGamer';

export default class AllGamers extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render(){
        console.log(this.props.baseURL)
        const gamerList = this.props.gamers
        if (gamerList.length) {
            return(
                <React.Fragment>
                    {gamerList.map((gamer, i) => {
                        return(
                            <div key={i} className='gamer'>
                            {/* ** Need to update this link once deployed to the heroku link */}
                            <a href={'http://localhost:3000/profile/'+gamer._id} ><img src={gamer.profilePic} alt={gamer.name} width='150px'/></a>
                            <p id='userinfo'>{gamer.name}</p>
                            </div>
                            )
                        })
                    }
                <SearchGamer />
                </React.Fragment>
            )
        } else {
            return(
                <React.Fragment>
                    <p>Tricksy Hobbitses Bug Fix</p>
                    <SearchGamer />
                </React.Fragment>
            )
        } 
    }
}
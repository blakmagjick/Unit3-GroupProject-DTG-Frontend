import React, { Component } from 'react';
import SearchGamer from './SearchGamer';

export default class AllGamers extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        const gamerList = this.props.gamers
        if (gamerList.length) {
            return(
                <React.Fragment>
                    {gamerList.map((gamer, i) => {
                        return(
                            <div key={i} className='gamer'>
                                <a href='http://localhost:3000/'><img src={gamer.profilePic} alt={gamer.name} width='150px'/></a>
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
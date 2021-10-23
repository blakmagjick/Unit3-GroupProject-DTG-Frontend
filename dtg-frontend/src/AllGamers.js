import React, { Component } from 'react';

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
                                <img src={gamer.profilePic} alt={gamer.name} width='150px' />
                            </div>
                            )
                        })
                    }
                </React.Fragment>
            )
        } else {
            return(
                <React.Fragment>
                    <p>Tricksy Hobbitses Bug Fix</p>
                </React.Fragment>
            )
        } 
    }
}
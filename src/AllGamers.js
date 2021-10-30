import React, { Component } from 'react';
import SearchGamer from './SearchGamer';

export default class AllGamers extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    
    render(){
        const gamerList = this.props.users
        console.log(gamerList)

        if (gamerList.length) {
            return(
                <React.Fragment>
                    {gamerList.map((user, i) => {
                        return(
                            <div key={i} className='gamer'>
                            <aside id='userinfo'>{user.name}</aside> 
                                <a href={'https://dtg-downtogame.herokuapp.com/profile/'+user._id} ><img src={user.profilePic} alt={user.username} width='150px'/></a>
                                <br/>
                                {/* <Profile profile={gamer} />   */}
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
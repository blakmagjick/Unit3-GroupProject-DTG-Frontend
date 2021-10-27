import React, { Component } from 'react';
import './App.css';
import Comments from './Comments'
// import StarRating from './StarRating';
import HeartButton from './HeartButton';

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
    const results = this.props.profile;
    console.log(results)
    // console.log(results)
 
        
    if (results.length) {
        return(
            <React.Fragment>
                <div className="App">
                     <HeartButton />
                 {/* <StarRating /> */}
                 </div>
                <h1>Profile Info</h1>
                <img src={results[1].profilePic} alt={results[1].name} width='150px'></img>
                Name: {results[1].name}
                Age:{results[1].age}
                Location: {results[1].location}
                Fave Games:{results[1].faveGames}
           <Comments
    commentsUrl="http://localhost:3000/comments"
    currentUserId="1"></Comments>
            

            </React.Fragment>
        )
    } else {
        return(
            <React.Fragment>
                
            </React.Fragment>)
    }       
  }
}
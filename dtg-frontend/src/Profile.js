import React, { Component } from 'react';
import './App.css';
import Comments from './Comments';
import HeartButton from './HeartButton';
// import StarRating from './StarRating';

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
      const results = this.props.profile;
        // console.log(results)
      if (results.length) {
        return(
            <React.Fragment>
              <HeartButton />
              {/* <StarRating /> */}
                <h1>Profile Info</h1>
                  <img 
                    src={results[1].profilePic} 
                    alt={results[1].name} 
                    width='150px' /><br />
                  Name: {results[1].name}<br />
                  Age:{results[1].age}<br />
                  Location: {results[1].location}<br />
                  Fave Games:{results[1].faveGames}<br />
                  <br />
              <Comments
                commentsUrl="http://localhost:3000/comments"
                currentUserId="1" />
            </React.Fragment>
          )
      } else {
        return(
          <React.Fragment>
          </React.Fragment>)
    }       
  }
}
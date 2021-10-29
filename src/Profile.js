// import React, { Component } from 'react';
import React from 'react';
import './profile.css';
import Comments from './Comments';
import HeartButton from './HeartButton';
import { useParams } from "react-router-dom";
// import StarRating from './StarRating';

export default function Profile(props) {
  console.log(props)

  let { id } = useParams();
      const profileData = props.profiles.find(profile => profile._id === id)
      if (profileData) {
        return(
              <div className='container1'>
                <h1>Profile Info</h1>
                  <div className='avatar-flip'>
                  <img src={profileData.profilePic} 
                    alt={profileData.name} 
                    height="150" width="150" /> 
                  <img 
                    src={profileData.profilePic} 
                    alt={profileData.name} 
                    height="150" width="150" /> 
                  </div>
                    <br />
                    <h2> {profileData.name} </h2>
                    <h4>{profileData.age}</h4>
                    <h4>{profileData.faveGames}</h4>
                    <h4>{profileData.location}📍</h4>
                  <HeartButton  />
                  <br />
                <Comments
                  commentsUrl="https://dtg-downtogame.herokuapp.com/comments" // (DEPLOYMENT)
                  // commentsUrl="http://localhost:3000/comments" (LOCAL)
                  currentUserId="1" />
              </div>
          )
      } else {
        return(
          <React.Fragment>
          </React.Fragment>)
        }       
  }
import React from 'react';
import './profile.css';
import Comments from './Comments';
import HeartButton from './HeartButton';
import { useParams } from "react-router-dom";

export default function Profile(props) {

      let { id } = useParams();
      const profileData = props.profiles.find(profile => profile._id === id)
      console.log(profileData)
      
      if (profileData) {
        return(
         <div className='container1'>     
            <h1 style={{color: 'white'}}>Spaceholder</h1>  
               <div className='avatar-flip'>
                  <img 
                    src={profileData.profilePic} 
                    alt={profileData.username} 
                    height="150" width="150" />
                  <img 
                    src={profileData.profilePic} 
                    alt={profileData.username} 
                    height="150" width="150" /> 
                    </div>
                    <br />
                  <h2 id='profileh2'> {profileData.username} </h2>
                  <h4 id='profileh4'>Age:{profileData.age}</h4>
                  <h4 id='profileh4'>{profileData.faveGames}</h4>
                  <h4 id='profileh4'>{profileData.location}📍</h4>
                  <HeartButton  />
              <Comments
                commentsUrl="https://dtg-downtogame.herokuapp.com/comments"
                currentUserId="1"/> <br />
                <input id="button" type="button" value="delete" onclick={() => this.deleteUser(profileData._id)} />
                </div>
          )
      } else {
        return(
          <React.Fragment>
          
          </React.Fragment>)
    }       
  }
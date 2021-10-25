import React  from 'react'
import './App.css';

function Profile (props){ 
    
    const results = props.data;

    // console.log(results)
    let gamer;
    
    if (results.length) {
        
        gamer = results.map((gamer, i) => <li key={i}> 
        <div>
        {gamer.username} <br />
        {gamer.profilePic}
        {gamer.age}
        {gamer.location}
        {gamer.faveGames}
        </div>
       
      
        </li>)    
        
      } else {
        //gamer = console.log('notgood')
       
      }

  return(
       <div>
          
            {gamer} 
            
        </div>
          
    
  );
}

export default Profile;
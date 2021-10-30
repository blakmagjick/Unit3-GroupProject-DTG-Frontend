import React from 'react'

function SignUp (props) {
    return(
        <div className ='login'>
            <div id='newformdiv' className='container'>
                <div className='row align-items-center my-5'>
                    
                <form id='newform' onSubmit={props.signupUser}>
                    <label htmlFor="fname">Username:</label>
                        <input type='text' id='username' name='username'/><br />
                        <label htmlFor="fname">Password:</label>   
                        <input type='password' id='password' name='password'/><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight: 'bold'}}>Required Profile Information:</span> <br />
                        <label htmlFor="fname">Name:</label> 
                        <input type ='text' id='name' name='name'/><br />
                        <label htmlFor="fname">Age:</label> 
                        <input type ='text' id='age' name='age'/><br />
                        <label htmlFor="fname">Profile Pic:</label> 
                        <input type ='text' id='profilePic' name='profilePic'/><br />
                        <label htmlFor="fname">Location:</label> 
                        <input type ='text' id='location' name='location'/><br />
                        <label htmlFor="fname">Fave Games:</label> 
                        <input type ='text' id='faveGames' name='faveGames'/><br />
                        <input type='submit' value='Sign Up' />        

                    </form>
                </div>
            </div>
        </div>
        )
    }

export default SignUp
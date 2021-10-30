import React from 'react'

function Login (props) {
    return(
        <div className ='login'>
            <div className='container'>
                <div className='row align-items-center my-5'>
                    
                    <form onSubmit={props.loginUser}>
                        <label htmlFor="fname">Username:</label> 
                        <input type ='text' id='username' name='username'/><br />
                        <label htmlFor="fname">Password:</label> 
                        <input type='password' id='password' name='password'/><br /><br />
                        <input type='submit' value='Login' />
                    </form>
                </div>
            </div>
        </div>
        )
    }

export default Login
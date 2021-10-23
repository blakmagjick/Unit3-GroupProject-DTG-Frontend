import React, { Component } from 'react'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }

    }


    render(){
        return(
            <div className ='login'>
                <div className='container'>
                    <div className='row align-items-center my-5'>
                        <form>
                        <strong>Login</strong>
                            <label htmlFor='name'>Username: </label>
                            <input type ='text' id='name' name='username'/>
                            <label htmlFor='name'>Password: </label>
                            <input type='text' id='passowrd' name='password'/>
                            <input type='submit' value='login' />
                        </form>
                        OR
                        <form>
                            <strong>Register</strong>
                            <label htmlFor='name'>Username:</label>
                            <input type='text' id='name' name='username'/>
                            <label htmlFor='name'>Password: </label>
                            <input type='text' id='password' name='password'/>
                            <input type='submit'
                            value='signup' />                    
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
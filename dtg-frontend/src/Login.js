import React, { Component } from 'react'

let baseUrl = 'http://localhost:3003'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            userLoggedIn: false,
        }
    }

    // login 
    loginUser = async (e) => {
        console.log('loginUser')
        e.preventDefault()

        const url = baseUrl + '/users/login'
        const loginBody = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        try {
            
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(loginBody),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })

            console.log(response)
            console.log('BODY: ', response.body)

            if(response.status === 200) {
                // this.getProfiles()
                console.log('🌈 login successful!🌈')
            }
        }
        catch (error) {
            console.log('Error => ', error)
        }
    }

    // signup
    signup = async (e) => {
        e.preventDefault()
        const url = baseUrl + '/users/signup'
        try {
            const response = await fetch(url, {
                method: 'POST', 
                body: JSON.stringify({
                    username: e.target.username.value,
                    password: e.target.password.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.status === 200) {
                // this.getProfiles()
                console.log('🏄‍♀️ singup successful! 🏄‍♂️')
            }
        }
        catch (error) {
            console.log('Error => ', error)
        }
    }


    render(){
        return(
            <div className ='login'>
                <div className='container'>
                    <div className='row align-items-center my-5'>
                        <form onSubmit={this.loginUser}>
                        <strong>Login</strong>
                            <label htmlFor='username'>Username: </label>
                            <input type ='text' id='username' name='username'/>
                            <label htmlFor='name'>Password: </label>
                            <input type='text' id='password' name='password'/>
                            <input type='submit' value='login' />
                        </form>
                        OR
                        <form onSubmit={this.signup}>
                            <strong>Register</strong>
                            <label htmlFor='username'>Username:</label>
                            <input type='text' id='username' name='username'/>
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
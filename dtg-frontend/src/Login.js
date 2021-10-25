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

    getUsers = () => {
        // fetch from the backend
        fetch(baseUrl + '/users', {
            credentials: 'include'
        })
        .then(res => {
            if(res.status === 200) {
                return res.json()
            } else {
                return []
            }
        })
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
            console.log(response.body)
            console.log('BODY: ', response.body)

            if(response.status === 200) {
                this.getUsers()
                console.log('🌈 login successful!🌈')
                this.setState({
                    userLoggedIn: true
                })
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
            if (response.status === 201) {
                this.getUsers()
                console.log('🏄‍♀️ signup successful! 🏄‍♂️')
            }
        }
        catch (error) {
            console.log('Error => ', error)
            console.log()
        }
    }


    render(){
        return(
            <div className ='login'>
                <div className='container'>
                    <div className='row align-items-center my-5'>
                        <form onSubmit={this.loginUser}>

                            <input type ='text' id='username' name='username'/>
                            
                            <input type='password' id='password' name='password'/>

                            <input type='submit' value='login' />

                        </form>
                        
                        <form onSubmit={this.signup}>
                            
                            <input type='text' id='username' name='username'/>
                            
                            <input type='password' id='password' name='password'/>

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
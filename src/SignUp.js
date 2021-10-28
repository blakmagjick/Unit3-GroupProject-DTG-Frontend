import React, { Component } from 'react'

let baseUrl = 'http://localhost:3003'

class SignUp extends Component {
    
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

export default SignUp
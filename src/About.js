import React from 'react';

function About() {
    return (
        <React.Fragment>
        <h4>Are you looking for other people to game with?</h4>
        <h5>Well we have the app for you!</h5>
        <p>Welcome to <span style={{fontWeight: 'bold'}}>Down to Game</span>, where you can search for other users who love the same games that you do!</p>
        <div>Please <a href={'https://dtg-downtogame.herokuapp.com/signup'}>sign up </a>to start searching for other gamers</div>
        <div>Or <a href={'https://dtg-downtogame.herokuapp.com/login'}>login </a>if you've registered before</div>
        </React.Fragment>
    )
}

export default About
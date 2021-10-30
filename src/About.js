import React from 'react';

function About() {
    return (
        <div>
        <h4 className='about'>Are you looking for other people to game with?</h4>
        <h5 className='about'>Well we have the app for you!</h5>
        <p className='about'>Welcome to <span style={{fontWeight: 'bold'}}>Down to Game</span>, where you can search for other users who love the same games that you do!</p>
        <div className='about'><a href={'https://dtg-downtogame.herokuapp.com/signup'}>Sign up </a>to create a profile.</div> 
        <div className='about'>Or <a href={'https://dtg-downtogame.herokuapp.com/login'}>login </a>if you already have.</div>
        </div>
    )
}

export default About
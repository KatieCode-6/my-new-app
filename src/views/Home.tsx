import React, { useState } from 'react'

// styles
import './Home.scss'

// assets
import logo from '../assets/logo.svg'

const Home: React.FC = () => {
    const [title,] = useState('React is the best!!!')
    return (
        <div className="home">
            <img className="logo" src={logo} alt="react logo" />
            <h1>{title}</h1>
            
            <p> 
                This is react. Ladies and gentleman. Let me indroduce this amazing open-source JavaScript library in &nbsp;
                <a 
                href="https://reactjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                > 
                documentation
                </a> 
            </p>
        </div>
    )
}

export default Home

import React from 'react'
import './css/header.css'
import { Link } from 'react-router-dom'


export default function Header(props) {

  
    return (
        
        <div className='header' style={props.darkBg}> 
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/body">Body</Link></li>
                
                <li><button onClick={props.darkMode}>{props.modeName}</button></li>
            </ul>
        </div>
    )
}

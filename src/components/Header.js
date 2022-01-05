import React from 'react'
import './css/header.css'

export default function Header(props) {

  
    return (
        
        <div style={props.darkBg}> 
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li><button onClick={props.darkMode}>{props.modeName}</button></li>
            </ul>
        </div>
    )
}

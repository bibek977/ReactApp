import React from 'react'
import './header.css'

export default function Header(props) {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>About Us</li>
            </ul>

            <a href="#">{props.name}</a>
        </div>
    )
}

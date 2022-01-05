import React,{useState} from 'react'
import './css/header.css'

export default function Header() {

    const [state, setstate] = useState('Night Mode')

    const [darkBg,setDarkBg] = useState({
        color: 'white',
        backgroundColor : 'black'
    })

    const darkMode = () =>{
        if(darkBg.backgroundColor==='black'){
            setDarkBg({
                color: 'black',
                backgroundColor:'white'
            })
            setstate('Day Mode')
        }
        else{
            setDarkBg({
                color: 'white',
                backgroundColor : 'black'
            })
            setstate('Night Mode')
        }
    }
    return (
        
        <div style={darkBg}> 
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li><button onClick={darkMode}>{state}</button></li>
            </ul>
        </div>
    )
}

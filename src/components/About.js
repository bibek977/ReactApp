import React,{useState} from 'react'
import './css/about.css'

export default function About() {
    const [state, setstate] = useState('white')
    const [bgColor, setbgColor] = useState({
        backgroundColor : 'white'
    })

    const changeText = ()=>{
        if(bgColor.backgroundColor == 'white'){
            setbgColor({
                backgroundColor : 'black'
            })
            setstate('black')
        }
        else {
            setbgColor({
                backgroundColor : 'white'
            })
            setstate('white')
        }
    }
 
    return (
        <div className='aboutBody' style={bgColor}>
            
            <button onClick={changeText}>{state}</button>
        </div>
    )
}

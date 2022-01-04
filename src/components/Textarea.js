import React,{useState} from 'react'
import './css/textarea.css'

export default function Textarea(props) {
    const clickedButton = ()=>{
        // console.log("button is clicked "  + initText)
        let changedText = initText.toUpperCase()
        finalText(changedText)
    }
    const onChangeTextarea = (event)=>{
        // console.log("textarea is changed ")
        finalText(event.target.value)
    }
    const [initText,finalText]=useState("")
    return (
        <div className='textarea'>
            <label htmlFor="textTransform">{props.text}</label>
            <textarea  id ='textTransform' value={initText} onChange={onChangeTextarea}></textarea>
            <button onClick={clickedButton}>Change</button>
        </div>
    )
}

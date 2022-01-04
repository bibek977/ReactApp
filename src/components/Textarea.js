import React,{useState} from 'react'
import './css/textarea.css'

export default function Textarea(props) {
    const toUpper = ()=>{
        // console.log("button is clicked "  + initText)
        let changedText = initText.toUpperCase()
        finalText(changedText)
    }

    const toLower = ()=>{
        // console.log("button is clicked "  + initText)
        let changedText = initText.toLowerCase()
        finalText(changedText)
    }
    const onChangeTextarea = (event)=>{
        // console.log("textarea is changed ")
        finalText(event.target.value)
    }
    const [initText,finalText]=useState("")
    return (<>
        <div className='textarea'>
            <label htmlFor="textTransform">{props.text}</label>
            <textarea  id ='textTransform' value={initText} onChange={onChangeTextarea}></textarea>
            <button onClick={toUpper}>Uppercase</button>
            <button onClick={toLower}>Lowercase</button>
        </div>
        <div className="result">
            <p>{initText.split(" ").length} words </p> <p> {initText.length} letters </p> <p> times to read : {0.008 * initText.split(" ").length} minutes</p>
        </div>
        
    </>
    )
}

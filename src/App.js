import './App.css';
import Header from './components/Header'
// import Body from './components/Body'
import Textarea from './components/Textarea';
// import About from './components/About'
import React, { useState } from 'react'


function App() {
  const [modeName, setmodeName] = useState('day')

  const [mode, setmode] = useState({
    backgroundColor : 'white',
    color : 'black'
  })
   const darkMode =()=>{
     if (mode.backgroundColor==="white"){
       setmode({
         backgroundColor : 'black',
         color : "white"
       })
       setmodeName('night')
       document.body.style.backgroundColor = "gray"
     }
     else{
       setmode({
         backgroundColor : 'white',
         color : 'black'
       })
       setmodeName('day')
       document.body.style.backgroundColor = 'whitesmoke'
     }
  }
  return (
    <>
      
    <Header darkBg={mode} darkMode={darkMode} modeName={modeName}></Header>
    {/* <Body name="Tour and Tourism"></Body> */}
    {/* <Body></Body> */}

    <Textarea text="Enter the Data :"></Textarea>

    {/* <About></About> */}

    </>
  );
}

export default App;

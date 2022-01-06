import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Textarea from './components/Textarea';
import About from './components/About'
import Footer from './components/Footer'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      //  alert('dark mode')
       setmodeName('night')
      //  document.body.style.backgroundColor = "gray"
     }
     else{
       setmode({
         backgroundColor : 'white',
         color : 'black'
       })
      //  alert('light mode')
       setmodeName('day')
      //  document.body.style.backgroundColor = 'whitesmoke'
      setInterval(() => {
        document.title="Bibek"
      }, 1500);
      setInterval(() => {
        document.title = "Bhattarai"
      }, 2500);
     }
  }
  return (
    <>
      <Router>
    <Header darkBg={mode} darkMode={darkMode} modeName={modeName}></Header>
        
    

    <Switch>
          <Route path="/about">
    <About></About>
          </Route>
         

          <Route exact path="/body">            
    <Body name="Tour and Tourism"></Body>
          </Route>

          <Route exact path="/">
    <Textarea text="Enter the Data :"></Textarea>
          </Route>

        </Switch>

    <Footer></Footer>
      </Router>


    </>
  );
}

export default App;
// 
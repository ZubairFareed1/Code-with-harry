// App.js
import React from 'react';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

const App = () => {
  const [mode,setMode]=useState('light');

  const toggleMode =()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor="#02002f";
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="#6a737b55";

    }
  }
  return (
    <>
    <Navbar logo="Portfolio" home="Home" mode ={mode} toggleMode={toggleMode}/>
    <TextForm mode ={mode}  heading="Enter the text..."/>
    <About  mode ={mode} />
    
    </>
  );
};
export default App;




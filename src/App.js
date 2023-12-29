// App.js
import React from 'react';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


const App = () => {
  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
    type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)

  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor="#02002f";
      showAlert("Dark mode is enabled","success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="#6a737b55";
      showAlert("Light mode is enabled","success");

    }
  }
  return (
    <>
    <Navbar  mode ={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm mode ={mode} showAlert={showAlert} heading="Enter the text..."/>
    <About  mode ={mode} />
    
    </>
  );
};
export default App;




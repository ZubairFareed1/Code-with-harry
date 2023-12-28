import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("handle up button clicked..");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleReverseClick = () =>{
        let newText = text.split("").reverse().join("");
        setText(newText)
    }
    const handleOnChange = (event) =>{
        // console.log("handle on changed");
        setText(event.target.value);


    }
    const handleCopy =()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const [text,setText]=useState("");
  return (
    <>    <div className='container'>
        
  <div className="mb-3">
    <h1 className={`my-3`} style={props.mode==='dark'?{color:'white'}:{color:'black'}} >{props.heading} </h1>
   <textarea className="form-control" placeholder='Enter paragraph to convert...' value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2 my-3' onClick={handleUpClick}> Convert to UpperCase</button>
<button className='btn btn-primary mx-2 my-3' onClick={handleLoClick}> Convert to LowerCase</button>
<button className='btn btn-primary mx-2 my-3' onClick={handleReverseClick}> Reverse Text</button>
<button className='btn btn-primary mx-2 my-3' onClick={handleCopy}> Copy Text</button>



    </div>
    <div className="container">
        <h2 className='my-3' style={props.mode==='dark'?{color:'white'}:{color:'black'}}>Your Text Summary</h2>
        <p style={props.mode==='dark'?{color:'white'}:{color:'black'}}>Total words :<b> {text.split(" ").length-1} </b>,Total Characters : <b>{text.length}</b></p>
        <p style={props.mode==='dark'?{color:'white'}:{color:'black'}}><b>{text===""?0: (0.008 * text.split(" ").length)} </b>- Reading Minutes</p>
        <h2 style={props.mode==='dark'?{color:'white'}:{color:'black'}}>Preview</h2>
        <p style={props.mode==='dark'?{color:'white'}:{color:'black'}}>{text}</p>
    </div>

    </>

  )
}

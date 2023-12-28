import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("handle up button clicked..");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        console.log("handle on changed");
        setText(event.target.value);


    }
    const [text,setText]=useState("");
  return (
    <div className='container'>
        
  <div className="mb-3">
    <h1 className='my-3 '>{props.heading} </h1>
   <textarea className="form-control" placeholder='Enter paragraph to convert...' value={text}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpClick}> Convert to UpperCase</button>

    </div>
  )
}

import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase button Clicked")
        // setText("State Changed")
        let newText = text.toUpperCase();
        setText(newText);
        

    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter the text here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="my-4 mx-4">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}

import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase button Clicked")
        // setText("State Changed")
        let newText = text.toUpperCase();
        setText(newText);


    }
    const handlelowClick = () => {

        let newText = text.toLowerCase();
        setText(newText);


    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter the text here');
    return (
        <>
            <div style={{color: props.mood==='dark'?'white':'black' }} className='container '>
                <h1>{props.heading}</h1>
                <div className="my-4 mx-4">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mood==='dark'?'gray':'white', color:  props.mood==='dark'?'white':'black' }} id="myBox" rows="8" ></textarea>

                </div>
                <button className="btn btn-primary mx-4 my-2" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary " onClick={handlelowClick} >Convert to Lowercase</button>
                <button className="btn btn-success mx-4 my-2" onClick={handleClear}>Clear Text</button>
            </div>


            <div style={{color: props.mood==='dark'?'white':'black' }} className="container my-3">


                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words with spaces, {text.split(/\s+/).filter(word => word).length} words without spaces and {text.length} character</p>
                {/* 170 words read in one minute then 1/170 */}
                <p>{0.005 * text.split(" ").length}Minutes Read</p>




            </div>
            <div style={{color: props.mood==='dark'?'white':'black',backgroundColor: props.mood==='dark'?'gray':'white' }} className="preview-container">
                {/* using props for understanding */}
                <h3>{props.type}</h3>
                <p>{text}</p>
            </div>
        </>
    )
}




//PRACTICE
// import React, { useState } from 'react';

// export default function TextForm(props) {
//     const [text, setText] = useState('Click here to type');


//     const handle = () => {
//         // setText("State Changed")
//         let newText = text.toUpperCase();
//         setText(newText)

//     }
//     const handler = (event) => {
//         setText(event.target.value)
//     }


//     return (
//         <div>
//             <h1>{props.heading}</h1>
//             <div className="my-4 mx-4">
//                 <textarea className="form-control" value={text} id="myBox" onChange={handler} rows="8"></textarea>

//             </div>
//             <button className="btn btn-primary my-4 mx-4" onClick={handle} >Change Text TO Uppercase</button>

//         </div>
//     )
// }

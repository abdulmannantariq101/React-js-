
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';




function App() {
  const [mood, setMood] = useState("light");


  const toogleMode=()=>{
    if (mood==="light"){
      setMood("dark")
      document.body.style.backgroundColor="gray"
    }
    else {
      setMood("light")
       document.body.style.backgroundColor="white"
    }
  }



    return (
    <>

      <Navbar title="textUtils" link="About Us"  mood={mood}   toogleMode={toogleMode}/>
      <div className="container my-5">
        <TextForm heading="Enter the text to analzye" mood={mood}   type="Preview"/>
      </div>
      <div className="container my-5">
      <About/>
      </div>
     

    </>
    
  );
}
export default App;

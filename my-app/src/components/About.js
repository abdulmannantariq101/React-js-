import React, { useState } from 'react'

export default function About() {
    //    myStyle behave like a object if u want to style
    let myStyle = {
        color: "red",
        display: "inline-block",
        backgroundColor: "cyan",
    }

    const [item, setItem] = useState({
        color: "black",
        backgroundColor: "white",
    })


    const [btntext, setBtnText] = useState("Enable Dark Mood")



    const toggleStyle = () => {
        if (item.color == "black") {
            setItem({
                color: "white",
                backgroundColor: "black",
            })
            setBtnText("Enable Light Mood")

        }
        else {
            setItem({
                color: "black",
                backgroundColor: "white",
            })
            setBtnText("Enable Dark Mood")


        }
    }


    return (
        <div className='container'>
            <h1 className='about my-4 p-2' style={myStyle}>About Us</h1>
            <div className="container" style={item}>


                <div style={item} className="accordion" id="accordionExample"   >
                    <div className="accordion-item" style={item}>
                        <h2 className="accordion-header" id="headingOne" >
                            <button style={item} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div style={item} className="accordion-item" >
                        <h2 className="accordion-header" id="headingTwo">
                            <button style={item} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div  className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2   className="accordion-header" id="headingThree">
                            <button style={item} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div style={item} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={toggleStyle} className="button btn btn-info my-4 mx-3 ">{btntext}</div>
        </div>
    )
}

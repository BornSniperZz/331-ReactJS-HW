import React, { useEffect } from "react";
import { useState } from "react";
import "./CountButton.css"

// Props are values (args) that get passed into the component
// State is a value that is internal to the component
const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0) // useState returns an array num to currentCount and a function to setCurrentCount

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    useEffect(() => {
        if (currentCount === 10) {
            setCurrentCount(0)
        }
    }, [currentCount])

    // border-radius (CSS) == borderRadius (Next.js)
    // const divStyle = {
    //     color: "blue",
    //     border: "1px solid black",
    // }

    // const buttonStyle = {
    //     background: props.buttonColor,
    //     borderRadius: "5px"
    // }

    // On button click, perform the handClick() function
    return (
        <div id="buttonContainer">
            <button onClick = {handleClick} style={{ backgroundColor: props.buttonColor }}>+{props.incrementBy}</button>
            <div className="countDisplay">{currentCount}</div>
        </div>
    )
}

export default CountButton
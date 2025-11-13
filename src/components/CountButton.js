import React from "react";
import { useState } from "react";

// Props are values (args) that get passed into the component
// State is a value that is internal to the component
const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0) // useState returns an array num to currentCount and a function to setCurrentCount

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

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
        <div>
            <button onClick = {handleClick}>+{props.incrementBy}</button>
            <div>{currentCount}</div>
        </div>
    )
}

export default CountButton
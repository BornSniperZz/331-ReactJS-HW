import React from "react";
import CountButton from "./CountButton/CountButton";
import { Link } from "react-router-dom";
import "./CountButton/CountButton.css"

const ButtonApp = () => {

    return (
        <div>
            <h1>Welcome to my React homework!</h1>
            <CountButton incrementBy = {1} buttonColor = {"darkkhaki"}/>
            <CountButton incrementBy = {2} buttonColor = {"lightslategrey"}/>
            <p>Here's a link to the repository for this <a href="https://github.com/BornSniperZz/331-ReactJS-HW">homework</a>!</p>
            <p>Go and take a look at my <Link to="/store">Fake Store</Link>!</p>
        </div>
    )
}

export default ButtonApp
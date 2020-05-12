import React from "react";
import axios from "axios";

import Header from "./Header";

const API_KEY = "66aa94f39e438aad5573cbf1112de56f"


const Main = () => {
    const api_call = () => {
        const url = `api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API_KEY}`
        axios.get(url)
    }
    return (
        <div className="main">
            <Header/>

        </div>
    )

}
export default Main

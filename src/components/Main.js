import React, {useState} from "react";
import axios from "axios";

import Header from "./Header";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";



const Main = () => {
    const [weather,setWeather]=useState()
    const api_call = async e => {
        e.preventDefault()
        const API_KEY = "66aa94f39e438aad5573cbf1112de56f"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${API_KEY}`
        const request = axios.get(url)
        const response = await request
        setWeather(response.data.main)
    }



    return (
        <div className="main">
            <Header/>
            <Content>
                <WeatherSearch api_call={api_call}/>
            </Content>

        </div>
    )

}
export default Main

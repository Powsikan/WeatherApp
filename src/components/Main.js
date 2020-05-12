import React, {useEffect} from "react";
import axios from "axios";

import Header from "./Header";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";



const Main = () => {
    const api_call = async () => {
        const API_KEY = "66aa94f39e438aad5573cbf1112de56f"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${API_KEY}`
        const request = axios.get(url)
        const response = await request
    }

    useEffect(() => {
        api_call()
    }, [])

    return (
        <div className="main">
            <Header/>
            <Content>
                <WeatherSearch/>
            </Content>

        </div>
    )

}
export default Main

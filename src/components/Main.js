import React, {useState} from "react";
import axios from "axios";

import Context from "../Context";

import Header from "./Header";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import Error from "./Error";
import DateTime from "./DateTime";
import Tagline from "./Tagline";


const Main = () => {
    const [weather, setWeather] = useState()
    const [city,setCity]=useState()
    const [error,setError]=useState()
    const api_call = async e => {
        e.preventDefault()
        const location = e.target.elements.location.value
        if (!location) return setError("Please enter the name of the city."),setWeather(null)
        const API_KEY = "66aa94f39e438aad5573cbf1112de56f"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const request = axios.get(url)
        const response = await request
        setWeather(response.data.main)
        setCity(response.data.name)
        setError(null)
    }


    return (
        <div className="main">
            <Header/>
            <Content>
                <DateTime/>
                <Tagline/>
                <Context.Provider value={{api_call, weather,city}}>
                    <WeatherSearch/>
                    {weather && <WeatherData/>}
                    {error&&<Error error={error}/>}
                </Context.Provider>
            </Content>

        </div>
    )

}
export default Main

import React from "react";

const WeatherSearch = (props) => {
    return (
        <div className="weather-search">
            <form onSubmit={props.api_call} className="weather-search__form">
                <input type="text" className="weather-search__input" autoComplete="off"/>
                <div className="weather-search__submit">
                    <button className="weather-search__button">&rarr;</button>
                </div>
            </form>
        </div>
    )
}
export default WeatherSearch

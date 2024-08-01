import React, { useState } from 'react'; 
import axios from 'axios';

const Weather = () => {

    const [city, setCity] = useState();
    const [weather, setWeather] = useState();

    const handleCityChange = (event) => {
        setCity(event.target.value)
    }

    const fetchWeather = async() => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'3831309007977ebbe7d1858e80ceab9b'}`);
            console.log(response)
            setWeather(response);
        }
        catch(error){
            console.log("fetching error: ", error);
        }
    }

    const handleClick = () => {
        fetchWeather();
    }

    return(
        <>
            <div className='weather-container'>
                <input
                    type='text'
                    placeholder='Enter City Name'
                    value={city}
                    onChange={handleCityChange}
                />
                <button onClick={handleClick}>Get Weather</button>

                {weather && <>
                    <div className='weather-info'>
                        <h2>{weather.data.name}</h2>
                        <p>Temperature: {weather.data.main.temp}</p>
                        <p>Humidity: {weather.data.main.humidity}</p>
                        <p>{weather.data.weather[0].description}</p>
                    </div>
                </>}

            </div>
        </>
    );
}

export default Weather;
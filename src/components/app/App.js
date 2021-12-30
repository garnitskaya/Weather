import { useState } from 'react';
import WeatherService from './../../services/WeatherService';
import Form from '../form/Form';
import Weather from '../weather/Weather';

import './app.css';

function App() {
    const [city, setCity] = useState([]);
    const weatherService = new WeatherService();
    const [cityName, setCityName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        weatherService.gettingWeather(cityName)
            .then(city => setCity(city))
        setCityName('');
    }

    const onChangeCity = (e) => {
        setCityName(e.target.value);
        console.log(e.target.value)
    }
    console.log('cityName', cityName)


    return (
        <div className="app">
            <h1>Приложение погода</h1>
            <div>
                <Form onSubmit={onSubmit} cityName={cityName} onChangeCity={onChangeCity} />
                <Weather city={city} />
            </div>
        </div>
    );
}

export default App;

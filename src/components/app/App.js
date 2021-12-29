import { useState } from 'react';
import WeatherService from './../../services/WeatherService';
import Form from '../form/Form';
import Weather from '../weather/Weather';

import './app.css';

function App() {
    const [city, setCity] = useState([]);
    const weatherService = new WeatherService();

    const onSubmit = (e) => {
        e.preventDefault();
        weatherService.gettingWeather()
            .then(city => setCity(city))
    }

    return (
        <div>
            <h1>Приложение погода</h1>
            <Form onSubmit={onSubmit} />
            <Weather city={city} />
        </div>
    );
}

export default App;

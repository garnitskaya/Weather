import { useEffect, useState } from 'react';

import { weatherService } from './../../services/WeatherService';
import Form from '../form/Form';
import Weather from '../weather/Weather';
import Spinner from '../spinner/Spinner';

import './app.scss';

function App() {
    const [city, setCity] = useState(JSON.parse(localStorage.getItem('city')) || []);
    const [cityName, setCityName] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const { gettingWeather } = weatherService();

    useEffect(() => {
        localStorage.setItem('city', JSON.stringify(city));
    }, [city]);

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (cityName) {
            gettingWeather(cityName)
                .then(onCityLoaded)
                .catch(onError)
        } else {
            onError();
        }
    }

    const onCityLoaded = (city) => {
        setCity(city);
        setCityName('');
        setError(false);
        setLoading(false);
    }

    const onError = () => {
        setError(true)
        setCity([]);
        setLoading(false);
        setCityName('');
    }

    const onChangeCity = (e) => {
        setCityName(e.target.value);
    }

    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <h2>Введите название города</h2> : null
    const content = !(spinner || errorMessage) ? <Weather city={city} /> : null;

    return (
        <div className="app">
            <h1>погода</h1>
            <Form onSubmit={onSubmit} cityName={cityName} onChangeCity={onChangeCity} />
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
}

export default App;
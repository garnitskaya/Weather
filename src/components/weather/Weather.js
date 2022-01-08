import { useEffect, useState } from 'react';

import night from '../../resourses/img/night.jpg';
import blueSky from '../../resourses/img/blue_sky.jpg';

import './weather.css';

const Weather = ({ city }) => {

    const { icon, name, country, description, feelsLike, temp, wind, sunrise, sunset, pressure, humidity, timezone } = city;
    const dateNow = Date.now() / 1000 + timezone;
    const daylightHours = 100 / (sunset - sunrise);
    const sunsetDistance = (dateNow - sunrise) * daylightHours;

    const [time, setTime] = useState(dateNow);

    useEffect(() => {
        const timer = setInterval(() => setTime(time => time + 1), 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    const convertTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const h = date.getUTCHours();
        const m = date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes();
        return `${h}:${m}`;
    }

    let style;
    if (dateNow <= sunrise) {
        style = { 'transform': `rotate(0deg)` };
        document.body.style.background = `url(${night}) center center/cover no-repeat`;
    } else if (dateNow > sunset) {
        style = { 'transform': `rotate(100deg)` };
        document.body.style.background = `url(${night}) center center/cover no-repeat`;
    } else if (sunrise < dateNow || dateNow < sunset) {
        style = { 'transform': `rotate(${sunsetDistance}deg)` };
        document.body.style.background = `url(${blueSky}) center center/cover no-repeat `;
    }

    return (
        <div className='weather'>
            {
                name ? <>
                    <div className='weater__time'>{convertTime(time)}</div>
                    <div className='weather__items'>
                        <img className='weather__icon' src={icon} alt={icon} />
                        <div className='weather__item'><span> {temp}</span> {name}</div>
                    </div>
                    <ul className='weather__list'>
                        <li>Местоположение: {name}, {country}</li>
                        <li>Температура: {temp} </li>
                        <li>По ощущению: {feelsLike} </li>
                        <li>Ветер: {wind}</li>
                        <li>Осадки: {description}</li>
                        <li>Давление: {pressure}</li>
                        <li>Влажность: {humidity}</li>
                        <li>
                            <div className='weather__list-line'>
                                <span style={style}></span>
                            </div>
                            <div className='weather__list-sun'>
                                <span>Восход: {convertTime(sunrise)} </span>
                                <span>Закат: {convertTime(sunset)} </span>
                            </div>
                        </li>
                    </ul>
                </> :
                    <h2>Введите название города</h2>
            }
        </div>
    )
}

export default Weather;
import { useEffect, useState } from 'react';

import { convertTime } from '../../helpers/convertTime';
import night from '../../resourses/img/night.jpg';
import blueSky from '../../resourses/img/blue_sky.jpg';

import './weatherMain.scss';

const WeatherMain = ({ city }) => {

    const { icon, name, country, description, feelsLike, temp, wind, sunrise, sunset, pressure, humidity, timezone } = city;
    const dateNow = Date.now() / 1000;
    const daylightHours = 100 / (sunset - sunrise);
    const sunsetDistance = (dateNow - sunrise) * daylightHours;

    const [time, setTime] = useState(dateNow);

    useEffect(() => {
        const timer = setInterval(() => setTime(time => time + 1), 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    let style;
    let borderTop;
    if (dateNow <= sunrise) {
        style = { 'transform': `rotate(0deg)` };
        borderTop = { 'borderTop': '2px solid rgba(255, 255, 0, .5)' };
        document.body.style.background = `url(${night}) 0 0/cover no-repeat fixed`;
    } else if (dateNow > sunset) {
        style = { 'transform': `rotate(100deg)` };
        borderTop = { 'borderTop': '2px solid rgba(255, 255, 0, .5)' };
        document.body.style.background = `url(${night}) 0 0/cover no-repeat fixed`;
    } else if (sunrise < dateNow || dateNow < sunset) {
        style = { 'transform': `rotate(${sunsetDistance}deg)` };
        document.body.style.background = `url(${blueSky}) 0 0/cover no-repeat fixed`;
    }

    return (
        <div className='weather'>
            <div className='weather__time'>{convertTime(time, timezone)}</div>
            <div className='weather__items'>
                <img className='weather__icon' src={icon} alt={icon} />
                <div className='weather__item'><span> {temp}</span> {name}</div>
            </div>
            <ul className='weather__list' style={borderTop}>
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
                        <span>Восход: {convertTime(sunrise, timezone)} </span>
                        <span>Закат: {convertTime(sunset, timezone)} </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default WeatherMain;
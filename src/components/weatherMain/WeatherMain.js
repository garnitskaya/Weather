import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { convertTime } from '../../utils/convertTime';
import Spinner from './../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import night from '../../resourses/img/night.jpg';
import blueSky from '../../resourses/img/blue_sky.jpg';

import './weatherMain.scss';

const WeatherMain = () => {
    const { city, timeNow, cityStatus } = useSelector(state => state.city);
    const dispatch = useDispatch();

    const { icon, name, country, description, feelsLike, temp, wind, sunrise, sunset, pressure, humidity, timezone } = city;
    const dateNow = timeNow / 1000;
    const daylightHours = 100 / (sunset - sunrise);
    const sunsetDistance = (dateNow - sunrise) * daylightHours;

    useEffect(() => {
        const timer = setInterval(() => dispatch((dateNow => dateNow + 1)), 1000);

        return () => {
            clearInterval(timer);
        }
        // eslint-disable-next-line
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

    if (cityStatus === 'loading') {
        return <Spinner />;
    } else if (cityStatus === 'error') {
        return <ErrorMessage />;
    }

    return (
        <div className='weather'>
            <div className='weather__time'>{convertTime(dateNow, timezone)}</div>
            <div className='weather__items'>
                <img className='weather__icon' src={icon} alt={icon} />
                <div className='weather__item'><span> {temp}</span> {name}</div>
            </div>
            <ul className='weather__list' style={borderTop}>
                <li>????????????????????????????: {name}, {country}</li>
                <li>??????????????????????: {temp} </li>
                <li>???? ????????????????: {feelsLike} </li>
                <li>??????????: {wind}</li>
                <li>????????????: {description}</li>
                <li>????????????????: {pressure}</li>
                <li>??????????????????: {humidity}</li>
                <li>
                    <div className='weather__list-line'>
                        <span style={style}></span>
                    </div>
                    <div className='weather__list-sun'>
                        <span>????????????: {convertTime(sunrise, timezone)} </span>
                        <span>??????????: {convertTime(sunset, timezone)} </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default WeatherMain;
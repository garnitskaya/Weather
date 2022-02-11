import { useEffect, useState } from "react";

import { weatherService } from './../../services/WeatherService';
import { convertTime, convertdata } from '../../helpers/convertTime';
import Spinner from './../spinner/Spinner';

import './weatherDaily.scss';


const WeatherDaily = ({ city }) => {
    const [weatherDaily, setweatherDaily] = useState([]);
    const [id, setId] = useState(null);
    const [showWeather, setShowWeather] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const { gettingWeatherDaily } = weatherService();
    const { coordLat, coordLon, timezone } = city;

    useEffect(() => {
        onRequestWeather();
    }, []);

    const onRequestWeather = () => {
        setLoading(true);
        gettingWeatherDaily(coordLat, coordLon)
            .then(onWeatherLoaded)
            .catch(onError)
    }

    const onWeatherLoaded = (weatherDaily) => {
        setweatherDaily(weatherDaily);
        setError(false);
        setLoading(false);
    }

    const onError = () => {
        setError(true)
        setLoading(false);
    }

    const onShowWeather = (id) => {
        setId(id);
        setShowWeather(showWeather => !showWeather);
    }

    const onShowContent = () => {
        setShowContent(showContent => !showContent);
    }


    const renderItems = (arr) => {
        return arr.map((item, i) => {
            const { time, icon, description, tempMinMax, temp, feelsLike, wind,
                sunrise, sunset, pressure, humidity, uvi } = item;

            const active = i === id && showWeather && showContent ? 'active' : '';

            return (
                <div className=" weather-daily__content" key={i}>
                    <div
                        className={`weather-daily__block ${active}`}
                        onClick={() => onShowWeather(i)}>
                        <div className="weather-daily__time" >{convertdata(time, timezone)}</div>
                        <div className="weather-daily__temp">
                            <img className="weather-daily__img" src={icon} alt={icon} />
                            <span> {tempMinMax}</span>
                        </div>
                        <div className="weather-daily__descr"> {description}</div>
                    </div>
                    <div className={`weather-daily__full-content full-content ${active}`}>
                        <div className="full-content__blocks">
                            <div className="full-content__items">
                                <span></span>
                                <span>Утро</span>
                                <span>День</span>
                                <span>Вечер</span>
                                <span>Ночь</span>
                            </div>
                            <div className="full-content__items">
                                Температура:
                                {temp.map((item, i) => {
                                    let newItem = Math.round(item) + '\xB0C';
                                    return <span key={i}>{newItem}</span>
                                })}
                            </div>
                            <div className="full-content__items">
                                По ощущению:
                                {feelsLike.map((item, i) => {
                                    let newItem = Math.round(item) + '\xB0C';
                                    return <span key={i}>{newItem}</span>
                                })}
                            </div>
                        </div>
                        <div className=" full-content__wrap">
                            <div className="full-content__block">
                                <span>Ветер:</span>
                                <span>{wind}</span>
                            </div>
                            <div className="full-content__block">
                                <span>Давление:</span>
                                <span>{pressure}</span>
                            </div>
                            <div className="full-content__block">
                                <span>Влажность:</span>
                                <span>{humidity}</span>
                            </div>
                            <div className="full-content__block">
                                <span>UF:</span>
                                <span>{uvi}</span>
                            </div>
                            <div className="full-content__block">
                                <span>Восход:</span>
                                <span>{convertTime(sunrise, timezone)} </span>
                            </div>
                            <div className="full-content__block">
                                <span>Закат:</span>
                                <span>{convertTime(sunset, timezone)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    if (loading) {
        return <Spinner />;
    } else if (error) {
        return <h5>Ошибка загрузки</h5>;
    }

    const elements = renderItems(weatherDaily);
    const activeContent = showContent ? 'active' : '';

    return (
        <div className="weather-daily">
            <h3 onClick={onShowContent}
                className={`weather-daily__title  ${activeContent}`}>
                Прогноз на 8 дней</h3>
            <div className={`weather-daily__wrap  ${activeContent}`}>
                {elements}
            </div>
        </div>
    )
}

export default WeatherDaily;

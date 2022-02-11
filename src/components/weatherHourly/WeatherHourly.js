import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import { convertTime } from "../../helpers/convertTime";
import { weatherService } from './../../services/WeatherService';
import Spinner from './../spinner/Spinner';

import './weatherHourly.scss';
import 'swiper/swiper.scss';


const WeatherHourly = ({ city }) => {
    const [weatherHourly, setweatherHourly] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const { gettingWeatherHourly } = weatherService();
    const { coordLat, coordLon, timezone } = city;

    useEffect(() => {
        onRequestWeather();
    }, []);


    const onRequestWeather = () => {
        setLoading(true);
        gettingWeatherHourly(coordLat, coordLon)
            .then(onWeatherLoaded)
            .catch(onError)
    }

    const onWeatherLoaded = (weatherHourly) => {
        setweatherHourly(weatherHourly);
        setError(false);
        setLoading(false);
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    if (loading) {
        return <Spinner />;
    } else if (error) {
        return <h5>Ошибка загрузки</h5>
    }

    return (
        <div className="weather-hourly">
            <h3 className="weather-hourly__title">Почасовой прогноз</h3>
            <Swiper
                breakpoints={{
                    768: {
                        slidesPerView: 10
                    },
                    576: {
                        slidesPerView: 7
                    },
                    320: {
                        slidesPerView: 6
                    }

                }}
            >
                {weatherHourly.map(({ icon, temp, time }, i) => {
                    if (i > 24) return;
                    return (
                        <SwiperSlide key={i} >
                            <div className="weather-hourly__item">{convertTime(time, timezone)}</div>
                            <img className="weather-hourly__img"
                                src={icon}
                                alt={icon} />
                            <div className="weather-hourly__item">
                                {temp}
                            </div>
                        </SwiperSlide >
                    )
                })}
            </Swiper >
        </div >
    )
}

export default WeatherHourly;



import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import { fetchHourly } from '../../redux/actions';
import { convertTime } from "../../utils/convertTime";
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import 'swiper/swiper.scss';

const WeatherHourlyContent = () => {
    const { city } = useSelector(state => state.city);
    const { weatherHourly, weatherHourlyStatus } = useSelector(state => state.weatherHourly);
    const dispatch = useDispatch();

    const { coordLat, coordLon, timezone } = city;

    useEffect(() => {
        dispatch(fetchHourly(coordLat, coordLon))
        // eslint-disable-next-line
    }, []);


    if (weatherHourlyStatus === 'loading') {
        return <Spinner />;
    } else if (weatherHourlyStatus === 'error') {
        return <ErrorMessage />
    }

    return (
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
                // eslint-disable-next-line
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
    )
}

export default WeatherHourlyContent;



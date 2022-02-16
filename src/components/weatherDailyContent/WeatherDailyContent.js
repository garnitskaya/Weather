import { useSelector, useDispatch } from 'react-redux';

import { convertTime, convertdata } from '../../utils/convertTime';
import { setShowDaily, setIdDaily } from "../../redux/actions";
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const WeatherDailyContent = () => {
    const { city } = useSelector(state => state.city);
    const { weatherDaily, weatherDailyStatus, idDaily, showDaily, showDailyContent } = useSelector(state => state.weatherDaily);
    const dispatch = useDispatch();

    const { timezone } = city;

    const onShowWeather = (id) => {
        dispatch(setIdDaily(id));
        dispatch(setShowDaily(!showDaily))
    }

    const renderItems = (arr) => {
        return arr.map((item, i) => {
            const { time, icon, description, tempMinMax, temp, feelsLike, wind,
                sunrise, sunset, pressure, humidity, uvi } = item;

            const active = i === idDaily && showDaily ? 'active' : '';

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

    if (weatherDailyStatus === 'loading') {
        return <Spinner />;
    } else if (weatherDailyStatus === 'error') {
        return <ErrorMessage />;
    }

    const elements = renderItems(weatherDaily);
    const activeContent = showDailyContent ? 'active' : '';

    return (
        <div className={`weather-daily__wrap  ${activeContent}`}>
            {elements}
        </div>
    )
}

export default WeatherDailyContent;

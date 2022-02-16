import { useSelector } from 'react-redux';

import WeatherHourly from "../weatherHourly/WeatherHourly";
import WeatherMain from "../weatherMain/WeatherMain";
import WeatherDaily from './../weatherDaily/WeatherDaily';

const Weather = () => {
    const { city } = useSelector(state => state.city);

    return (
        <>
            {
                city.name ? <>
                    <WeatherMain />
                    <WeatherHourly />
                    <WeatherDaily />
                </> :
                    <h2>Введите название города</h2>
            }
        </>
    )
}

export default Weather;

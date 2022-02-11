import WeatherHourly from "../weatherHourly/WeatherHourly";
import WeatherMain from "../weatherMain/WeatherMain";
import WeatherDaily from './../weatherDaily/WeatherDaily';


const Weather = ({ city }) => {
    return (
        <>
            {
                city.name ? <>
                    <WeatherMain city={city} />
                    <WeatherHourly city={city} />
                    <WeatherDaily city={city} />
                </> :
                    <h2>Введите название города</h2>
            }
        </>
    )
}

export default Weather;
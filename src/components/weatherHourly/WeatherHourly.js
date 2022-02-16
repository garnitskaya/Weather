import WeatherWrap from './../common/WeatherWrap';
import WeatherHourlyContent from './../weatherHourlyContent/WeatherHourlyContent';

import './weatherHourly.scss';

const WeatherHourly = () => {
    return (
        <WeatherWrap
            cl='hourly'
            title='Почасовой прогноз'>
            <WeatherHourlyContent />
        </WeatherWrap>
    )
}

export default WeatherHourly;



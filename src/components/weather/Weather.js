import './weather.css';

const Weather = ({ city }) => {
    const { icon, name, country, description, feelsLike, temp, wind, sunrise, sunset, pressure, humidity, timezone } = city;

    const dateNow = Date.now() / 1000 + timezone;
    const daylightHours = 100 / (sunset - sunrise);
    const sunsetDistance = (dateNow - sunrise) * daylightHours

    const convertTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const h = date.getUTCHours();
        const m = date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes();
        return `${h}:${m}`;
    }

    let style;
    if (dateNow <= sunrise) {
        style = { 'transform': `rotate(0deg)` }
    } else if (dateNow > sunset) {
        style = { 'transform': `rotate(100deg)` }
    } else if (sunrise < dateNow || dateNow < sunset) {
        style = { 'transform': `rotate(${sunsetDistance}deg)` }
    }

    return (
        <div className='weather'>
            {
                name ? <>
                    <div className='weater__time'>{convertTime(dateNow)}</div>
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
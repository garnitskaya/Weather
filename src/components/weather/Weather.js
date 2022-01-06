import './weather.css';

const Weather = ({ city }) => {
    const { icon, name, country, description, feelsLike, temp, wind, sunrise, sunset, pressure, humidity } = city;

    const convertTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const h = date.getUTCHours();
        const m = date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes();
        return `${h}:${m}`;
    }

    return (
        <div className='weather'>
            {
                name && <>
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
                        <li>Восход: {convertTime(sunrise)} </li>
                        <li>Закат: {convertTime(sunset)} </li>
                    </ul>
                </>
            }
        </div>
    )
}

export default Weather;
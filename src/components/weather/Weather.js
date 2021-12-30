import './weather.css';

const Weather = ({ city }) => {
    const { icon, name, country, description, feelsLike, temp, wind, sunrise, pressure, humidity } = city;
    return (
        <div className='weather'>
            <div className='weather__items' src>
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
                <li>Восход: {sunrise} </li>
            </ul>
        </div>
    )
}

export default Weather;
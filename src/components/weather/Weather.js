

const Weather = ({ city }) => {
    const { icon, name, country, description, feelsLike, temp, wind, sunrise, pressure, humidity } = city;
    return (
        <div>
            <img src={icon} alt={icon} />
            <div>Местоположение: {name}, {country}</div>
            <div>Температура: {temp} </div>
            <div>По ощущению: {feelsLike} </div>
            <div>Ветер: {wind}</div>
            <div>Осадки: {description}</div>
            <div>Давление: {pressure}</div>
            <div>Влажность: {humidity}</div>
            <div>Восход: {sunrise} </div>
        </div>
    )
}

export default Weather;
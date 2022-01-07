export default class WeatherService {
    _apiBase = 'http://api.openweathermap.org/data/2.5/weather';
    _apiKey = 'appid=60f6d2438edc03c76131adc3db79b9cb';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status:${res.status}`);
        }

        const data = await res.json();
        return data
    }

    gettingWeather = async (city) => {
        const res = await this.getResource(`${this._apiBase}?q=${city}&units=metric&lang=ru&${this._apiKey}`);
        return this.transformSity(res);
    }

    transformSity = (city) => {
        return {
            icon: ` http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`,
            name: city.name,
            country: city.sys.country,
            description: city.weather[0].description,
            feelsLike: Math.round(city.main.feels_like) + '\xB0C',
            temp: Math.round(city.main.temp) + '\xB0C',
            wind: Math.round(city.wind.speed) + 'м/с',
            sunrise: city.sys.sunrise + city.timezone,
            sunset: city.sys.sunset + city.timezone,
            pressure: Math.round(city.main.pressure * 0.750063755419211) + 'мм рт.ст.',
            humidity: city.main.humidity + '%',
            timezone: city.timezone
        }
    }
}





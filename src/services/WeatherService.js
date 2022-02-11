export const weatherService = () => {
    const _apiBase = 'https://api.openweathermap.org/data/2.5/';
    const _apiKey = 'appid=60f6d2438edc03c76131adc3db79b9cb';

    const getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status:${res.status}`);
        }

        const data = await res.json();
        return data
    }

    const gettingWeather = async (city) => {
        const res = await getResource(`${_apiBase}weather?q=${city}&units=metric&lang=ru&${_apiKey}`);
        return transformSity(res);
    }

    const gettingWeatherHourly = async (lat, lon) => {
        const res = await getResource(`${_apiBase}onecall?lat=${lat}&lon=${lon}&units=metric&lang=ru&${_apiKey}`);
        return res.hourly.map(transformWeatherHourly);
    }

    const gettingWeatherDaily = async (lat, lon) => {
        const res = await getResource(`${_apiBase}onecall?lat=${lat}&lon=${lon}&units=metric&lang=ru&${_apiKey}`);
        return res.daily.map(transformWeatherDaily);
    }

    const transformSity = (city) => {
        return {
            icon: ` https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`,
            name: city.name,
            country: city.sys.country,
            description: city.weather[0].description,
            feelsLike: Math.round(city.main.feels_like) + '\xB0C',
            temp: Math.round(city.main.temp) + '\xB0C',
            wind: Math.round(city.wind.speed) + 'м/с',
            sunrise: city.sys.sunrise,
            sunset: city.sys.sunset,
            pressure: Math.round(city.main.pressure * 0.750063755419211) + 'мм рт.ст.',
            humidity: city.main.humidity + '%',
            timezone: city.timezone,
            coordLat: city.coord.lat,
            coordLon: city.coord.lon
        }
    }


    const transformWeatherHourly = (city) => {
        return {
            icon: ` https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`,
            temp: Math.round(city.temp) + '\xB0C',
            time: city.dt,
            timezone: city.timezone
        }
    }

    const transformWeatherDaily = (city) => {
        return {
            time: city.dt,
            icon: ` https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`,
            description: city.weather[0].description,
            tempMinMax: `${Math.round(city.temp.max)} / ${Math.round(city.temp.min)} \xB0C`,
            temp: [
                city.temp.morn,
                city.temp.day,
                city.temp.eve,
                city.temp.night],
            feelsLike: [
                city.feels_like.morn,
                city.feels_like.day,
                city.feels_like.eve,
                city.feels_like.night],
            wind: Math.round(city.wind_speed) + 'м/с',
            sunrise: city.sunrise,
            sunset: city.sunset,
            pressure: Math.round(city.pressure * 0.750063755419211) + 'мм рт.ст.',
            humidity: city.humidity + '%',
            uvi: Math.round(city.uvi)
        }
    }

    return { gettingWeather, gettingWeatherHourly, gettingWeatherDaily };
};





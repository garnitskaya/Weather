export default class WeatherService {
    //_apiBase = 'api.openweathermap.org/data/2.5/forecast';
    ////_sityID =
    //_apiKey = 'appid={60f6d2438edc03c76131adc3db79b9cb}';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status:${res.status}`);
        }

        const data = await res.json();
        return data
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const res = await this.getResource(`api.openweathermap.org/data/2.5/forecast?id=Kiev&appid=60f6d2438edc03c76131adc3db79b9cb`)

        return res;
    }
}





import { weatherService } from './../services/WeatherService';
import {
    CITY_FETCHED, CITY_FETCHING, CITY_FETCHING_ERROR, CITY_NAME_FETCHED,
    DAILY_FETCHED, DAILY_FETCHING, DAILY_FETCHING_ERROR, HOURLY_FETCHED,
    HOURLY_FETCHING, HOURLY_FETCHING_ERROR, SET_ID_DAILY, SET_SHOW_DAILY,
    SET_SHOW_DAILY_CONTENT, SET_TIME_NOW, SET_UPDATE_BTN
} from './consts';

const { gettingWeather, gettingWeatherDaily, gettingWeatherHourly } = weatherService();

export const cityFetching = () => ({ type: CITY_FETCHING });
export const cityFetched = (city) => ({ type: CITY_FETCHED, payload: city });
export const cityFetchingError = () => ({ type: CITY_FETCHING_ERROR });
export const cityNameFetched = (cityName) => ({ type: CITY_NAME_FETCHED, payload: cityName });
export const setTimeNow = (time) => ({ type: SET_TIME_NOW, payload: time });

export const dailyFetching = () => ({ type: DAILY_FETCHING });
export const dailyFetched = (weatherDaily) => ({ type: DAILY_FETCHED, payload: weatherDaily });
export const dailyFetchingError = () => ({ type: DAILY_FETCHING_ERROR });
export const setIdDaily = (id) => ({ type: SET_ID_DAILY, payload: id });
export const setShowDaily = (payload) => ({ type: SET_SHOW_DAILY, payload });
export const setShowDailyContent = (payload) => ({ type: SET_SHOW_DAILY_CONTENT, payload });

export const hourlyFetching = () => ({ type: HOURLY_FETCHING });
export const hourlyFetched = (weatherHouly) => ({ type: HOURLY_FETCHED, payload: weatherHouly });
export const hourlyFetchingError = () => ({ type: HOURLY_FETCHING_ERROR });
export const setUpdateBtn = () => ({ type: SET_UPDATE_BTN });


export const fetchCityWeather = (fetching, cityName) => (dispatch) => {
    dispatch(fetching());
    gettingWeather(cityName)
        .then(city => dispatch(cityFetched(city)))
        .catch(() => dispatch(cityFetchingError()))
}

export const fetchDaily = (coordLat, coordLon) => (dispatch) => {
    dispatch(dailyFetching());
    gettingWeatherDaily(coordLat, coordLon)
        .then(data => dispatch(dailyFetched(data)))
        .catch(() => dispatch(dailyFetchingError()))
}

export const fetchHourly = (coordLat, coordLon) => (dispatch) => {
    dispatch(hourlyFetching());
    gettingWeatherHourly(coordLat, coordLon)
        .then(data => dispatch(hourlyFetched(data)))
        .catch(() => dispatch(hourlyFetchingError()))
}
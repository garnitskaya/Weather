import { CITY_FETCHED, CITY_NAME_FETCHED, CITY_FETCHING, CITY_FETCHING_ERROR, SET_TIME_NOW, SET_UPDATE_BTN } from '../consts';

const initialState = {
    city: [],
    cityName: '',
    cityStatus: 'idle',
    timeNow: Date.now(),
    isUpdateBtn: false
}

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case CITY_FETCHING:
            return {
                ...state,
                cityStatus: 'loading',
            }
        case CITY_FETCHED:
            return {
                ...state,
                city: action.payload,
                cityStatus: 'idle',
                isUpdateBtn: false,
                cityName: ''
            }
        case CITY_FETCHING_ERROR:
            return {
                ...state,
                cityStatus: 'error'
            }
        case CITY_NAME_FETCHED:
            return {
                ...state,
                cityName: action.payload
            }
        case SET_TIME_NOW:
            return {
                ...state,
                timeNow: action.payload,
            }
        case SET_UPDATE_BTN:
            return {
                ...state,
                isUpdateBtn: true,
                cityStatus: 'loading'
            }
        default:
            return state;
    }
}

export default cityReducer;

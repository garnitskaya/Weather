import { DAILY_FETCHED, DAILY_FETCHING, DAILY_FETCHING_ERROR, SET_ID_DAILY, SET_SHOW_DAILY, SET_SHOW_DAILY_CONTENT } from "../consts";

const initialState = {
    weatherDaily: [],
    weatherDailyStatus: 'idle',
    idDaily: null,
    showDaily: false,
    showDailyContent: false,
}

const weatherDailyReducer = (state = initialState, action) => {
    switch (action.type) {
        case DAILY_FETCHING:
            return {
                ...state,
                weatherDailyStatus: 'loading'
            }
        case DAILY_FETCHED:
            return {
                ...state,
                weatherDaily: action.payload,
                weatherDailyStatus: 'idle'
            }
        case DAILY_FETCHING_ERROR:
            return {
                ...state,
                weatherDailyStatus: 'error'
            }
        case SET_ID_DAILY:
            return {
                ...state,
                idDaily: action.payload
            }
        case SET_SHOW_DAILY:
            return {
                ...state,
                showDaily: action.payload
            }
        case SET_SHOW_DAILY_CONTENT:
            return {
                ...state,
                showDailyContent: action.payload
            }
        default:
            return state;
    }
};

export default weatherDailyReducer;
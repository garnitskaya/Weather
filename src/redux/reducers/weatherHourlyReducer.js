import { HOURLY_FETCHED, HOURLY_FETCHING, HOURLY_FETCHING_ERROR } from "../consts";

const initialState = {
    weatherHourly: [],
    weatherHourlyStatus: 'idle',
}

const weatherHourlyReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOURLY_FETCHING:
            return {
                ...state,
                weatherHourlyStatus: 'loading'
            }
        case HOURLY_FETCHED:
            return {
                ...state,
                weatherHourly: action.payload,
                weatherHourlyStatus: 'idle'
            }
        case HOURLY_FETCHING_ERROR:
            return {
                ...state,
                weatherHourlyStatus: 'error'
            }
        default:
            return state;
    }
};

export default weatherHourlyReducer;
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { cityReducer, weatherHourlyReducer, weatherDailyReducer } from './../reducers';

const reducers = combineReducers({
    city: cityReducer,
    weatherDaily: weatherDailyReducer,
    weatherHourly: weatherHourlyReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
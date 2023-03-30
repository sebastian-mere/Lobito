import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import weatherReducer from './reducers/weather.reducer';
import cityReducer from './reducers/city.reducer';

const RootReducer = combineReducers({
    city: cityReducer,
    weather: weatherReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))
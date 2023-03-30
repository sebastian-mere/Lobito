import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import weatherReducer from './reducers/weather.reducer';

const RootReducer = combineReducers({
    weather: weatherReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))
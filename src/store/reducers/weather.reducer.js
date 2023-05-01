import {
    CURRENT_WEATHER,
    HOURS_WEATHER,
    CURRENT_WEATHER_REQUEST,
    CURRENT_WEATHER_FAILURE,
    HOURS_WEATHER_REQUEST
} from "../actions/weather.action";

const initialState = {
    currentWeather: null,
    hoursWeather: null,
    loading: true,
    error: null,
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_WEATHER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case HOURS_WEATHER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.currentWeather,
                loading: false,
                error: null,
            };
        case HOURS_WEATHER:
            return {
                ...state,
                hoursWeather: action.hoursWeather,
                loading: false,
                error: null,
            };
        case CURRENT_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default weatherReducer;

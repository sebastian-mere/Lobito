import {
    CURRENT_WEATHER, 
    CURRENT_WEATHER_REQUEST,
    CURRENT_WEATHER_FAILURE
} from '../actions/weather.action';

const initialState = {
    currentWeather: null,
    loading: false,
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

        case CURRENT_WEATHER:
            return {
                ...state,
                currentWeather,
                loading: false,
            };

        case CURRENT_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error,
            };

        default:
            return state;
    }
};

export default weatherReducer;
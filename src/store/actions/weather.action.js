import { API_URL } from './../../constants/Database';

export const CURRENT_WEATHER_REQUEST = 'CURRENT_WEATHER_REQUEST';
export const CURRENT_WEATHER = 'CURRENT_WEATHER';
export const CURRENT_WEATHER_FAILURE = 'CURRENT_WEATHER_FAILURE';

export const currentWeatherRequest = () => ({
  type: CURRENT_WEATHER_REQUEST,
});

export const currentWeatherFailure = (error) => ({
  type: CURRENT_WEATHER_FAILURE,
  payload: error,
});

export const getCurrentWeather = () => {
    return async dispatch => {
        try {
            dispatch(currentWeatherRequest());

            const response = await fetch(API_URL,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
           
            const resData = await response.json();

            const currentWeather = resData

            dispatch({
                type: CURRENT_WEATHER,
                currentWeather
            });
        } catch (error) {
            console.log(error);
            dispatch(currentWeatherFailure(error.message));
        }
    }
}


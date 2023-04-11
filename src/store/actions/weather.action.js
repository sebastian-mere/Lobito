import { API_KEY } from './../../constants/Database';

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

export const getCurrentWeather = (city) => {
    return async (dispatch) => {
        try {
            dispatch(currentWeatherRequest());

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const resData = await response.json();

            const currentWeather = resData;

            dispatch({
                type: CURRENT_WEATHER,
                currentWeather,
            });
        } catch (error) {
            console.log(error);
            
        }
    };
};



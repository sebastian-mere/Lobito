import { API_KEY } from './../../constants/Database';

export const CURRENT_WEATHER_REQUEST = 'CURRENT_WEATHER_REQUEST';
export const HOURS_WEATHER_REQUEST = 'HOURS_WEATHER_REQUEST';
export const CURRENT_WEATHER = 'CURRENT_WEATHER';
export const HOURS_WEATHER = 'HOURS_WEATHER';
export const CURRENT_WEATHER_FAILURE = 'CURRENT_WEATHER_FAILURE';

export const hoursWeatherRequest = () => ({
    type: HOURS_WEATHER_REQUEST,
});

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
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
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


export const getHoursWeather = (city) => {
    return async (dispatch) => {
        try {
            dispatch(hoursWeatherRequest());

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const resData = await response.json();

            const hoursWeather = resData.list.filter((forecast) => {
                const forecastDate = new Date(forecast.dt_txt);
                const currentDate = new Date();
                const hoursDifference = (forecastDate - currentDate) / 1000 / 60 / 60;
                return hoursDifference >= 0 && hoursDifference <= 12;
            });

            dispatch({
                type: HOURS_WEATHER,
                hoursWeather,
            });
        } catch (error) {
            console.log(error);

        }
    };
};

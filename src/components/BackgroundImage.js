import React from 'react';
import { ImageBackground } from 'react-native';

const BackgroundImage = ({ currentWeather, children }) => {
  let backgroundImage;

  switch (currentWeather.weather[0].icon) {
    case "01d":
    case "01n":
      backgroundImage = require("../../assets/bg-weather-clear.jpg");
      break;
    case "02d":
    case "02n":
      backgroundImage = require("../../assets/bg-weather-few-clouds.jpg");
      break;
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      backgroundImage = require("../../assets/bg-weather-clouds.jpg");
      break;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
    case "11d":
    case "11n":
      backgroundImage = require("../../assets/bg-weather-rain.jpg");
      break;
    case "13d":
    case "13n":
      backgroundImage = require("../../assets/bg-weather-snow.jpg");
      break;
    case "50d":
    case "50n":
      backgroundImage = require("../../assets/bg-weather-mist.jpg");
      break;
    default:
      backgroundImage = require("../../assets/bg-weather-default.jpg");
      break;
  }

  return (
    <ImageBackground source={backgroundImage} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundImage;

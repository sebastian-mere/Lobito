import { StyleSheet, Image, Text, View, ActivityIndicator, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../constants/Colors';

const Weather = () => {

  const currentWeather = useSelector(state => state.weather.currentWeather);
  const hoursWeather = useSelector(state => state.weather.hoursWeather);
  const loading = useSelector(state => state.weather.loading);

  console.log(currentWeather)
  console.log(hoursWeather)
  console.log(loading)

  let backgroundImage;

  switch (currentWeather.weather[0].description) {
    case "clear sky":
      backgroundImage = require("../../assets/bg-weather-clear.jpg");
      break;
    case "few clouds":
      backgroundImage = require("../../assets/bg-weather-few-clouds.jpg");
      break;
      case "overcast clouds":
      backgroundImage = require("../../assets/bg-weather-clouds.jpg");
      break;
    case "scattered clouds":
      backgroundImage = require("../../assets/bg-weather-clouds.jpg");
      break;
    case "broken clouds":
      backgroundImage = require("../../assets/bg-weather-clouds.jpg");
      break;
    case "shower rain":
      backgroundImage = require("../../assets/bg-weather-rain.jpg");
      break;
    case "rain":
      backgroundImage = require("../../assets/bg-weather-rain.jpg");
      break;
    case "thunderstorm":
      backgroundImage = require("../../assets/bg-weather-rain.jpg");
      break;
    case "snow":
      backgroundImage = require("../../assets/bg-weather-snow.jpg");
      break;
    case "mist":
      backgroundImage = require("../../assets/bg-weather-mist.jpg");
      break;
    default:
      backgroundImage = require("../../assets/bg-weather-default.jpg");
      break;
  }

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color={COLORS.blue} />
      </View>
    );
  }

  const loboImageN = Math.round(currentWeather.main.humidity/10)*10;
  let loboImage;

    switch (loboImageN) {
      case 0:
        loboImage = require("../../assets/lobo0.png");
        break;
      case 10:
        loboImage = require("../../assets/lobo10.png");
        break;
      case 20:
        loboImage = require("../../assets/lobo20.png");
        break;
      case 30:
        loboImage = require("../../assets/lobo30.png");
        break;
      case 40:
        loboImage = require("../../assets/lobo40.png");
        break;
      case 50:
        loboImage = require("../../assets/lobo50.png");
        break;
      case 60:
        loboImage = require("../../assets/lobo60.png");
        break;
      case 70:
        loboImage = require("../../assets/lobo70.png");
        break;
      case 80:
        loboImage = require("../../assets/lobo80.png");
        break;
      case 90:
        loboImage = require("../../assets/lobo90.png");
        break;
      case 100:
        loboImage = require("../../assets/lobo100.png");
        break;
      default:
        loboImage = require("../../assets/lobo0.png");
        break;
    }

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.screen}>
        <View style={styles.ciudad}>
          <Text style={styles.titulo}>{currentWeather.name} ,{currentWeather.sys.country}</Text>
          <Text style={styles.maxmin}>{Math.round(currentWeather.main.temp_max)} °C / {Math.round(currentWeather.main.temp_min)} °C</Text>
        </View>
        <Image source={loboImage} style={styles.lobo} />
        <View style={styles.dataContainer}>
          <Text style={styles.data}><MaterialCommunityIcons name="thermometer" size={28} color="white" />{Math.round(currentWeather.main.temp)}°C</Text>
          <Text style={styles.data}><MaterialCommunityIcons name="water" size={28} color="white" />{Math.round(currentWeather.main.humidity)}%</Text>
          <Text style={styles.data}><MaterialCommunityIcons name="weather-windy" size={28} color="white" />{Math.round(currentWeather.wind.speed)} km/h</Text>
          <Text style={styles.data}><MaterialCommunityIcons name="speedometer" size={28} color="white" />{Math.round(currentWeather.main.pressure)} hPa</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Weather;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  ciudad:{
    position: 'absolute',
    top: 90,
    left: 60,
  },
  titulo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
    width: 150,
    textShadowOffset: {height: 2},
    textShadowRadius: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  maxmin: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    width: 150,
    textShadowOffset: {height: 2},
    textShadowRadius: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  lobo: {
    position: 'absolute',
    top: 90,
    width: 350,
    height: 350,
  },
  dataContainer: {
    position: 'absolute',
    bottom: 90,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  data: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
    padding: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});
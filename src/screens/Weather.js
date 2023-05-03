import { StyleSheet, Text, View, ActivityIndicator, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../constants/Colors';
import Phrases from './../components/Phrases';
import Lobito from './../components/Lobito';
import BackgroundImage from '../components/BackgroundImage';

import {
  normalize
} from '../utils/normalize';

const Weather = () => {

  const currentWeather = useSelector(state => state.weather.currentWeather);
  const loading = useSelector(state => state.weather.loading);

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size={normalize(50)} color={COLORS.blue} />
      </View>
    );
  }

  if (currentWeather.cod === "404") {
    return (
      <ImageBackground source={require("../../assets/bg-forecast.jpg")} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}>
        <View style={styles.screen}>
          <Text style={styles.tituloError}>La ciudad ingresada no es válida. Por favor, inténtalo de nuevo.</Text>
        </View>
      </ImageBackground>
    );
  } else {

    const weatherIcons = {
      '01d': 'weather-sunny',
      '02d': 'weather-partly-cloudy',
      '03d': 'weather-partly-cloudy',
      '04d': 'weather-cloudy',
      '09d': 'weather-rainy',
      '10d': 'weather-pouring',
      '11d': 'weather-lightning',
      '13d': 'weather-snowy',
      '50d': 'weather-fog',
      '01n': 'weather-night',
      '02n': 'weather-night-partly-cloudy',
      '03n': 'weather-night-partly-cloudy',
      '04n': 'weather-cloudy',
      '09n': 'weather-rainy',
      '10n': 'weather-pouring',
      '11n': 'weather-lightning',
      '13n': 'weather-snowy',
      '50n': 'weather-fog',
    };

    return (
      <BackgroundImage currentWeather={currentWeather}>
        <View style={styles.screen}>
          <View style={styles.ciudad}>
            <Text style={[styles.titulo, { fontSize: normalize(23), width: normalize(150), textShadowOffset: { height: normalize(2) } }]}>{currentWeather.name} ,{currentWeather.sys.country}</Text>
            <Text style={[styles.maxmin, { fontSize: normalize(18), width: normalize(150), textShadowOffset: { height: normalize(2) } }]}>{Math.round(currentWeather.main.temp_max)} °C / {Math.round(currentWeather.main.temp_min)} °C</Text>
          </View>
          <Lobito />
          <View style={styles.dataContainer}>
            <Text style={[styles.data, { fontSize: normalize(32), paddingVertical: normalize(5) }]}><MaterialCommunityIcons name={weatherIcons[currentWeather.weather[0].icon]} size={normalize(28)} color="white" />{Math.round(currentWeather.main.temp)}°C</Text>
            <Text style={[styles.data, { fontSize: normalize(32), paddingVertical: normalize(5) }]}><MaterialCommunityIcons name="water-percent" size={normalize(28)} color={COLORS.blue} />{Math.round(currentWeather.main.humidity)}%</Text>
            <Text style={[styles.data, { fontSize: normalize(32), paddingVertical: normalize(5) }]}><MaterialCommunityIcons name="weather-windy" size={normalize(28)} color="white" />{Math.round(currentWeather.wind.speed)} km/h</Text>
          </View>
          <Phrases />
        </View>
      </BackgroundImage>
    );
  }



};

export default Weather;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  ciudad: {
    position: 'absolute',
    top: "10%",
    left: normalize(60),
  },
  titulo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: normalize(23),
    width: normalize(150),
    textShadowOffset: { height: normalize(2) },
    textShadowRadius: normalize(30),
    textShadowColor: 'rgba(0, 0, 0, 0.5)', 
  },
  tituloError: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: normalize(28),
    textShadowRadius: normalize(30),
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    width: "70%",
    textAlign: "center"
  },
  maxmin: {
    color: '#fff',
    fontWeight: 'bold',
    textShadowRadius: normalize(30),
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  dataContainer: {
    position: 'absolute',
    top: "65%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  data: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: normalize(28),
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(5),
  },
});
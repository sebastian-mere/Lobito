import { StyleSheet, Image, Text, View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import COLORS from '../constants/Colors';

const Weather = () => {

  const currentWeather = useSelector(state => state.weather.currentWeather);
  const loading = useSelector(state => state.weather.loading);
  
  console.log(currentWeather)
  console.log(loading)

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color={COLORS.blue} />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text>{currentWeather.name}</Text>
      <Image source={require("../../assets/lobo0.png")} style={styles.img} />
      <Text>{Math.round(currentWeather.main.temp)} °C</Text>
      <Text>{currentWeather.weather[0].description}</Text>
      <Image source={{ uri: `http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png` }} style={styles.icono} />
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center"
  },
  img: {
    width: 300,
    height: 300
  },
  icono: {
    width: 64,
    height: 64
  }
});
import React from 'react';
import { ActivityIndicator, FlatList, ImageBackground, StyleSheet, View, } from 'react-native';
import { Card, Paragraph, Title, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../constants/Colors';

import {
  normalize
} from '../utils/normalize';

const Forecast = () => {
  const hoursWeather = useSelector(state => state.weather.hoursWeather);
  const loading = useSelector(state => state.weather.loading);

  console.log(hoursWeather)

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color={COLORS.blue} />
      </View>
    );
  }
  
  if (!hoursWeather) {
    return (
      <ImageBackground source={require("../../assets/bg-forecast.jpg")} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}>
        <View style={styles.container}>
          <Text style={styles.tituloError}>La ciudad ingresada no es válida. Por favor, inténtalo de nuevo.</Text>
        </View>
      </ImageBackground>
    );
  } else {

    const daysWeather = hoursWeather.reduce((acc, hour) => {
      const date = new Date(hour.dt_txt.split(' ')[0]).toDateString();
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(hour);
      return acc;
    }, {});
  
    const now = new Date();
    const next5Days = [
      now,
      new Date(now.getTime() + 86400000),
      new Date(now.getTime() + 2 * 86400000),
      new Date(now.getTime() + 3 * 86400000),
      new Date(now.getTime() + 4 * 86400000),
    ].map(date => date.toDateString());
  
    const forecast = next5Days
      .filter(date => daysWeather[date])
      .map(date => ({
        date: new Date(date),
        data: daysWeather[date],
      }));
  
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
      '01n': 'weather-sunny',
      '02n': 'weather-partly-cloudy',
      '03n': 'weather-partly-cloudy',
      '04n': 'weather-cloudy',
      '09n': 'weather-rainy',
      '10n': 'weather-pouring',
      '11n': 'weather-lightning',
      '13n': 'weather-snowy',
      '50n': 'weather-fog',
    };
  
    const renderItem = ({ item }) => (
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.titleCard}>{item.date.getDate()}/{item.date.getMonth() + 1}</Title>
          {item.data.map(hour => (
            <View style={styles.hourContainer} key={hour.dt}>
              <Paragraph style={styles.textCard}>
                {hour.dt_txt.split(' ')[1].slice(0, 2)}hs
              </Paragraph>
  
              <Paragraph style={styles.textCard}>
                <MaterialCommunityIcons name={weatherIcons[hour.weather[0].icon]} size={24} color={COLORS.lightpink} />
              </Paragraph>
  
              <Paragraph style={styles.textCard}>
                {Math.round(hour.main.temp)}°C {' '}
              </Paragraph>
  
              <Paragraph style={styles.textCard}>
                <MaterialCommunityIcons name="water" size={20} color={COLORS.blue} />{Math.round(hour.pop)}%
              </Paragraph>
            </View>
  
          ))}
        </Card.Content>
      </Card>
    );
  
    return (
      <ImageBackground source={require("../../assets/bg-forecast.jpg")}>
        <FlatList
          data={forecast}
          keyExtractor={item => item.date.toISOString()}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
          ListHeaderComponent={<Title style={styles.title}>Pronóstico</Title>}
        />
      </ImageBackground>
    );

  }

  
};

export default Forecast;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(20),
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: normalize(23),
    textShadowOffset: { height: 2 },
    textShadowRadius: normalize(30),
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: normalize(50),
    paddingBottom: normalize(20)
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
  titleCard: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: normalize(23),
    textShadowOffset: { height: 2 },
    textShadowRadius: normalize(30),
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: normalize(10),
    paddingStart: normalize(18),
    borderBottomWidth: normalize(1),
    borderBottomColor: "white"
  },
  card: {
    marginBottom: normalize(20),
    width: normalize(300),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  textCard: {
    height: normalize(40),
    color: '#fff',
    fontWeight: 'bold',
    fontSize: normalize(20),
    textAlignVertical: 'center',
    paddingHorizontal: normalize(10)
  },
  hourContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

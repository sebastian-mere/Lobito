import { StyleSheet, Image, View, ActivityIndicator} from 'react-native';
import { useSelector } from 'react-redux';
import COLORS from '../constants/Colors';
import {
    normalize
  } from '../utils/normalize';

const Lobito = () => {

  const currentWeather = useSelector(state => state.weather.currentWeather);
  const loading = useSelector(state => state.weather.loading);

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

        <Image source={loboImage} style={styles.lobo} />

  );
};

export default Lobito;

const styles = StyleSheet.create({

  lobo: {
    position: 'absolute',
    top: "9%",
    width: normalize(350),
    height: normalize(350),
  },
});
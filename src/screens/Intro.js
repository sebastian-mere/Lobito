import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/Colors.js";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from 'react-redux';
import { getCurrentWeather, getHoursWeather } from '../store/actions/weather.action';
import LocationService from "../components/LocationService.js";
import { API_KEY } from './../constants/Database';

const Intro = ({ navigation }) => {

  const [city, setCity] = useState("");
  const [location, setLocation] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location) {
      console.log(location)
      fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${location.latitude}&lon=${location.longitude}&limit=1&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          const city = data[0].name;
          console.log(data)
          setCity(city);
        })
        .catch((error) => console.error("GUARDA!: " + error));
    }
  }, [location]);

  const handleLocation = (location) => {
    setLocation(location);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <LinearGradient
        colors={["#333399", "#EE2A7B"]}
        start={[0.1, 0.1]}
        end={[0.9, 0.9]}
        style={styles.container}
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
          <View style={styles.finder}>
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu ciudad"
              value={city}
              onChangeText={setCity}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                dispatch(getCurrentWeather(city));
                dispatch(getHoursWeather(city))
                navigation.navigate("WeatherTab");
              }}
            >
              <FontAwesome name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <LocationService onLocation={(location) => handleLocation(location)} />
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default Intro;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    marginBottom: 30,
  },
  finder: {
    flexDirection: "row",
  },
  input: {
    paddingHorizontal: 10,
    height: 35,
    width: 200,
    backgroundColor: "white",
    color: "black",
    fontFamily: "montserrat-bold",
  },
  button: {
    backgroundColor: COLORS.blue,
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});

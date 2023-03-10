import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Intro from "./src/screens/Intro";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Weather from "./src/screens/Weather";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "montserrat-black": require("./assets/fonts/Montserrat-Black.ttf"),
  });

  const [showWeather, setShowWeather] = useState(false);

  const handleButtonPress = () => {
    setShowWeather(true);
  };

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <View style={styles.container}>
      {!showWeather ? (
        <Intro onButtonPress={handleButtonPress} />
      ) : (
        <Weather />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

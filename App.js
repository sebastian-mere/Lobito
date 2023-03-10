import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Intro from "./src/screens/Intro"
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


export default function App() {

  const [fontsLoaded] = useFonts({
    "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf") ,
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "montserrat-black": require("./assets/fonts/Montserrat-Black.ttf") 
  })

  React.useEffect(() =>{
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  return (
    <View style={styles.container}>
      <Intro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

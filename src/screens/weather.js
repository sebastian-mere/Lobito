import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Weather = ({ navigation }) => {

  return (
    <TouchableOpacity style={styles.screen}
      onPress={() => {
        navigation.navigate('Forecast')
      }}
    >
      <Image source={require("../../assets/lobo0.png")} style={styles.img} />
      <Text>Ver pronóstico</Text>
    </TouchableOpacity>
  )
}

export default Weather

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 300,
    height: 300
  }
})
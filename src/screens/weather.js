import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const Weather = () => {
  return (
    <View>
      <Image source={require("../../assets/lobo0.png")} style={styles.img} />
    </View>
  )
}

export default Weather

const styles = StyleSheet.create({
    img: {
        width: 300,
        height: 300
    }
})
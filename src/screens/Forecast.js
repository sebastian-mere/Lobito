import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Forecast = () => {
  return (
    <View style={styles.screen}>
      <Text>Forecast</Text>
    </View>
  )
}

export default Forecast

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }

})
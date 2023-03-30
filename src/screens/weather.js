import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



const Weather = () => {

  const dispatch = useDispatch()
  const currentWeather = useSelector(state => state.currentWeather)
  
  console.log(currentWeather)

  React.useEffect(()=>{
    dispatch(getCurrentWeather())
  },[])

  return (
    <View>
      <Text>{currentWeather.name}</Text>
      <Image source={require("../../assets/lobo0.png")} style={styles.img} />
      <Text>{currentWeather.main.temp} °C</Text>
      <Text>{currentWeather.weather.description}</Text>
      <Image source={{ uri: `http://openweathermap.org/img/w/${currentWeather.weather.icon}.png` }} />
    </View>
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
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Weather from '../screens/Weather';

const Stack = createNativeStackNavigator()

const WeatherNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
  }}>
      <Stack.Screen name="Weather" component={Weather} />
    </Stack.Navigator>
  )
}

export default WeatherNavigator
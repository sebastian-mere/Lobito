import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './../screens/Intro';
import Weather from './../screens/Weather';
import Forecast from './../screens/Forecast';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Weather" component={Weather} />
            <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
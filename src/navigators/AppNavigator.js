import React from 'react'

import Intro from './../screens/Intro';
import Weather from './../screens/Weather';
import Forecast from './../screens/Forecast';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    
      <Stack.Navigator initialRouteName="Intro"
      screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="Intro" component={Intro} />
      </Stack.Navigator>
    
  )
}

export default AppNavigator
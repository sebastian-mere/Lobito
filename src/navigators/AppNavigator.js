import React from 'react'

import Intro from './../screens/Intro';
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
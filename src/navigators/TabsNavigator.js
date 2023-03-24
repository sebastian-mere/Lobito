import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppNavigator from './AppNavigator';
import WeatherNavigator from './WeatherNavigator';
import Colors from '../constants/Colors';
import Forecast from './../screens/Forecast';

const BottomTabs = createBottomTabNavigator()

const TabsNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName='Intro'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <BottomTabs.Screen name="Intro" component={AppNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            <MaterialIcons name="gps-fixed" size={24} color={focused ? "#fff" : Colors.lightpink} />
                            <Text style={{ color: focused ? "#fff" : Colors.lightpink }}>Ubicación</Text>
                        </View>
                    )
                }} />
            <BottomTabs.Screen name="Weather" component={WeatherNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            <MaterialCommunityIcons name="weather-partly-cloudy" size={24} color={focused ? "#fff" : Colors.lightpink} />
                            <Text style={{ color: focused ? "#fff" : Colors.lightpink }}>Clima</Text>
                        </View>
                    )
                }} />
            <BottomTabs.Screen name="Forecast" component={Forecast}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            <MaterialCommunityIcons name="calendar-month-outline" size={24} color={focused ? "#fff" : Colors.lightpink} />
                            <Text style={{ color: focused ? "#fff" : Colors.lightpink }}>Pronóstico</Text>
                        </View>
                    )
                }} />
        </BottomTabs.Navigator>
    )
}

export default TabsNavigator

const styles = StyleSheet.create({
    tabBar: {
        borderTopColor: "#fff",
        borderTopWidth: 3,
        backgroundColor: "#EE2A7B",
    },
    tabBarIcon: {
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
        
    }
})
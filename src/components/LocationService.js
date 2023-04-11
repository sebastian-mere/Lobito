import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../constants/Colors'
import * as Location from 'expo-location'


const LocationService = ({ onLocation }) => {

    const [location, setLocation] = React.useState("null")
    const [loading, setLoading] = useState(false);

    const handleGeolocation = async () => {
        setLoading(true);
        const hasPermission = await verifyGeolocationPermission()
        if (!hasPermission) {
            setLoading(false);
            return;
          }

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        })
        console.log(location);
        setLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
        onLocation(location.coords)
        setLoading(false);

    }

    const verifyGeolocationPermission = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            alert('No se puede acceder a la ubicación, asegurese de dar los permisos necesarios')
            return false
        }
        return true
    }

    const buttonText = loading ? (
    "Buscando ubicación"
  ) : (
    'Mi ubicación'
  );

  return (
    <View style={styles.container}>
      <View>
        
      </View>
      <View style={styles.actions}>
        <Button
          title={buttonText}
          color={Colors.blue}
          onPress={handleGeolocation}
          disabled={loading}
        />
      </View>
    </View>
    )
}

export default LocationService

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    actions: {
        width: 235,
        marginTop: 20,
    }
})

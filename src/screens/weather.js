import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Weather = ({ onImgPress }) => {

    const handleImgPress = () => {
        onImgPress();
    };

    return (
        <TouchableOpacity
        onPress={handleImgPress}
        >
            <Image source={require("../../assets/lobo0.png")} style={styles.img} />
        </TouchableOpacity>
    )
}

export default Weather

const styles = StyleSheet.create({
    img: {
        width: 300,
        height: 300
    }
})
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/Colors.js";
import { FontAwesome } from "@expo/vector-icons";

const Intro = ({ navigation  }) => {

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <LinearGradient
        colors={["#333399", "#EE2A7B"]}
        start={[0.1, 0.1]}
        end={[0.9, 0.9]}
        style={styles.container}
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
          <View style={styles.finder}>
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu ciudad"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Weather')
                }}
            >
              <FontAwesome name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default Intro;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    logo: {
        marginBottom: 30,
    },
    finder: {
        flexDirection: "row",
    },
    input: {
        paddingHorizontal: 10,
        height: 35,
        width: 200,
        backgroundColor: "white",
        color: "black",
        fontFamily: "montserrat-regular",
    },
    button: {
        backgroundColor: COLORS.blue,
        height: 35,
        width: 35,
        alignItems: "center",
        justifyContent: "center",
    },
});

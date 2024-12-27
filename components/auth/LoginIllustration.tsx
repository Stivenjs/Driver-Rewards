import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Lottie from "lottie-react-native";

const { width } = Dimensions.get("window");

export const LoginIllustration = () => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <Lottie
        source={require("@/assets/animations/Login.json")}
        style={styles.animation}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginBottom: 20,
    position: "relative",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  animation: {
    width: width * 0.6,
    height: 145,
    alignSelf: "center",
  },
});

export default LoginIllustration;

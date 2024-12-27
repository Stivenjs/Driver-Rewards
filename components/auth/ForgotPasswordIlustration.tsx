import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Lottie from "lottie-react-native";

const { width } = Dimensions.get("window");

export const ForgotPasswordIllustration = () => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <Lottie
        source={require("@/assets/animations/Forgotpassword.json")}
        style={styles.animation}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
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
    height: 200,
    alignSelf: "center",
  },
});

export default ForgotPasswordIllustration;

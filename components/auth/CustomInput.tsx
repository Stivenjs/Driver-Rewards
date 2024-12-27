import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { TextInput, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

interface CustomInputProps {
  icon: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(1000).springify()}
      style={styles.container}
    >
      <View style={styles.iconContainer}>
        <Feather name="home" size={20} color="#A0A0A0" />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    color: "#333",
  },
});

export default CustomInput;

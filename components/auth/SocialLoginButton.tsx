import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SocialLoginButtonProps {
  icon: string;
  label: string;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  style?: ViewStyle;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  icon,
  label,
  onPress,
  backgroundColor,
  textColor,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={textColor} style={styles.icon} />
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
    width: "80%",
    alignSelf: "center",
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
  },
});

export default SocialLoginButton;

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScreenProps } from "@/types/Navigation";
import ForgotPasswordIllustration from "@/components/auth/ForgotPasswordIlustration";
import CustomInput from "@/components/auth/CustomInput";
import FadeView from "@/components/ui/FadeView";

const ForgotPasswordScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ForgotPasswordIllustration />
      <FadeView>
        <Text style={styles.title}>Recupera tu contraseña</Text>
        <Text style={styles.subtitle}>
          Ingresa tu correo electrónico para recibir instrucciones
        </Text>
      </FadeView>

      <FadeView>
        <CustomInput
          icon="mail"
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar instrucciones</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.backToLogin}
        >
          <Text style={styles.backToLoginText}>Volver al inicio de sesión</Text>
        </TouchableOpacity>
      </FadeView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  backToLogin: {
    marginTop: 20,
    alignItems: "center",
  },
  backToLoginText: {
    color: "#007AFF",
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;

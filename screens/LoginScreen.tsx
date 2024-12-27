import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScreenProps } from "@/types/Navigation";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SocialLoginButton from "@/components/auth/SocialLoginButton";
import CustomInput from "@/components/auth/CustomInput";
import FadeView from "@/components/ui/FadeView";
import LoginIllustration from "@/components/auth/LoginIllustration";

const LoginScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSocialLogin = (provider: string) => {
    console.log(`Iniciando sesión con ${provider}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />
      <LoginIllustration />
      <FadeView>
        <Text style={styles.title}>Bienvenido de vuelta</Text>
        <Text style={styles.subtitle}>Inicia sesión en tu cuenta</Text>
      </FadeView>

      <FadeView>
        <CustomInput
          icon="mail"
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
        />
        <CustomInput
          icon="lock"
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>O</Text>
          <View style={styles.dividerLine} />
        </View>

        <SocialLoginButton
          icon="logo-google"
          label="Continuar con Google"
          onPress={() => handleSocialLogin("Google")}
          backgroundColor="#DB4437"
          textColor="#FFFFFF"
        />
        <SocialLoginButton
          icon="logo-facebook"
          label="Continuar con Facebook"
          onPress={() => handleSocialLogin("Facebook")}
          backgroundColor="#4267B2"
          textColor="#FFFFFF"
        />
        <SocialLoginButton
          icon="logo-apple"
          label="Continuar con Apple"
          onPress={() => handleSocialLogin("Apple")}
          backgroundColor="#000000"
          textColor="#FFFFFF"
        />
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>¿No tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.signupLink}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </FadeView>
    </ScrollView>
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
  forgotPassword: {
    color: "#007AFF",
    textAlign: "center",
    marginTop: 20,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#666",
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: {
    color: "#666",
  },
  signupLink: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});

export default LoginScreen;

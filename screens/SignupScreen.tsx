import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScreenProps } from "@/types/Navigation";
import SignupIllustration from "@/components/auth/SignupIllustration";
import CustomInput from "@/components/auth/CustomInput";
import SocialLoginButton from "@/components/auth/SocialLoginButton";
import FadeView from "@/components/ui/FadeView";

const SignupScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSocialSignup = (provider: string) => {
    console.log(`Registrándose con ${provider}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />
      <SignupIllustration />
      <FadeView>
        <Text style={styles.title}>Crea tu cuenta</Text>
        <Text style={styles.subtitle}>Únete a nuestra comunidad</Text>
      </FadeView>

      <FadeView>
        <CustomInput
          icon="user"
          placeholder="Nombre completo"
          value={name}
          onChangeText={setName}
        />
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
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>O</Text>
          <View style={styles.dividerLine} />
        </View>

        <SocialLoginButton
          icon="logo-google"
          label="Registrarse con Google"
          onPress={() => handleSocialSignup("Google")}
          backgroundColor="#DB4437"
          textColor="#FFFFFF"
        />
        <SocialLoginButton
          icon="logo-facebook"
          label="Registrarse con Facebook"
          onPress={() => handleSocialSignup("Facebook")}
          backgroundColor="#4267B2"
          textColor="#FFFFFF"
        />
        <SocialLoginButton
          icon="logo-apple"
          label="Registrarse con Apple"
          onPress={() => handleSocialSignup("Apple")}
          backgroundColor="#000000"
          textColor="#FFFFFF"
        />

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>¿Ya tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Inicia sesión</Text>
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
  buttonDisabled: {
    backgroundColor: "#99c9ff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#666",
  },
  loginLink: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});

export default SignupScreen;

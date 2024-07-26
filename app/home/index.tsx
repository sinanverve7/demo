import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 20, marginTop: 60 }}>
        <Image
          source={{ uri: "https://cdn8.quackquack.in/logo_seo.png" }}
          style={styles.logo}
        />
        <Image
          source={require("./../../assets/images/banner.jpg")}
          style={styles.profileImages}
        />
        <Text style={styles.slogan}>MATCH. CHAT. LIKE. DATE. REPEAT.</Text>
        <View style={styles.buttonContainer}>
          <Link href="/signup" asChild>
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.buttonText}>SIGN UP WITH PHONE</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/login" asChild>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <Text style={styles.terms}>
          You accept our terms and privacy policy by signing up.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
  },
  logo: {
    width: 200,
    height: 50,
    resizeMode: "contain",
    marginBottom: 20,
  },
  profileImages: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  slogan: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 250,
  },
  button: {},
  signUpButton: {
    backgroundColor: "#FF6600",
    marginBottom: 10,
    width: "100%",
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 35,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginButton: {
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 35,
  },
  loginText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  terms: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
});

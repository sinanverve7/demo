import React, { useState } from "react";
import Toast from "react-native-simple-toast";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { getUniqueId } from "react-native-device-info";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import LoginButton from "@/components/LoginButton";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const onLogin = async () => {
    try {
      console.log("login button clicked");
      const mobileinfo = await getUniqueId();
      const dataJSON: string = encryption(
        JSON.stringify({
          username: userName,
          password,
          mobileinfo: mobileinfo,
          captcha: "",
          version: "7.0.5",
          country_code: "",
          logintype: "cred",
          login_type_ios: "first",
        }),
      );
      const postData = {
        data: dataJSON,
        version_code: "705",
        device: "ios",
        encry_on_off: "2",
      };
      const params = new URLSearchParams(postData);
      const url = `https://stg4.quackquack.in/qq/login`;
      const response = await axios.post(url, params);
      const res = JSON.parse(decryption(response.data));
      const { success } = res;

      if (success == 1) {
        setUserName("");
        setPassword("");
        const {} = res;
        await AsyncStorage.setItem("loginId", res.id);
        await AsyncStorage.setItem("loginToken", res.login_token);
        //
        const OptionsIOS = {
          textColor: "#111",
          backgroundColor: "#FCAE1E",
        };
        Toast.show("Login successfull!", Toast.LONG, OptionsIOS);
      } else {
        console.log("login response ==> ", success);

        const OptionsIOS = {
          textColor: "#ffffff",
          backgroundColor: "#FF5733 ",
        };
        Toast.show("something went wrong", Toast.LONG, OptionsIOS);
      }
    } catch (error) {
      console.log("error happened ==>", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 20 }}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email or mobile number"
          defaultValue={userName}
          onChangeText={(newText) => setUserName(newText)}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.passwordInput}
            defaultValue={password}
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={(newText) => setPassword(newText)}
            secureTextEntry={hidePass}
          />
          <Pressable
            style={styles.iconButton}
            onPress={() => setHidePass(!hidePass)}
          >
            <Ionicons
              name={hidePass ? "eye-off" : "eye"}
              size={24}
              color="black"
            />
          </Pressable>
        </View>

        <Text style={[styles.forgotPassword]}>Forgot your password?</Text>
        <LoginButton buttonText="LOGIN" onPress={onLogin} disabled={false} />
        <Text style={styles.orText}>OR</Text>
        <Pressable style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Sign in with Apple</Text>
        </Pressable>
        <Pressable style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Sign in with Facebook</Text>
        </Pressable>
        <Link href="/login-otp" asChild>
          <Pressable style={styles.otpButton}>
            <Text style={styles.otpButtonText}>LOGIN WITH OTP</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 0,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 35,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  inputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  iconButton: {
    position: "absolute",
    right: 10,
    padding: 10,
  },

  forgotPassword: {
    color: "#666",
    textAlign: "right",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#FF6600",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
  },
  socialButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  socialButtonText: {
    color: "white",
    textAlign: "center",
  },
  otpButton: {
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  otpButtonText: {
    color: "#FF6600",
    fontWeight: "bold",
  },
});

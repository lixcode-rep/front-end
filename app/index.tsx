import React, { useState } from "react";
import { useRouter } from 'expo-router';

import {
  Platform,
  StatusBar,
  Alert,
  Pressable,
  View,
  StyleSheet,
  Text,
} from "react-native";

import LoginHeader from "../components/LoginHeader";
import Input from "../components/Input";
import SocialLogin from "../components/SocialLogin";

export type TabId = 'municipalities | districts';

const handleTabPress = (tabId) => {
  setActiveTab(tabId);
  console.log(`Tab ${tabId} pressed`);
};

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    console.log("Login pressed", { email, password });
    if (email === 'provider' && password === '123') {
      router.push('./distr-page')
    }

    if (email === 'daniel' && password === '123') {
      router.push('./mainpage')
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.content}>
    <LoginHeader onSignUp={() => console.log("Sign up pressed")} />

    <Input value={email} onChange={setEmail} placeholder="Enter email" />
    <Input
    value={password}
    onChange={setPassword}
    placeholder="Enter password"
    secure
    />

    <Pressable style={styles.loginButton} onPress={handleLogin}>
    <Text style={styles.loginButtonText}>Login</Text>
    </Pressable>

    <Pressable onPress={() => console.log("Forgot password")}>
    <Text style={styles.forgotPassword}>Forgot your password?</Text>
    </Pressable>

    <SocialLogin onSocialPress={(p) => console.log(`${p} login`)} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight },
      web: {},
    }),
    padding: 20,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    maxWidth: Platform.OS === "web" ? 400 : undefined,
    alignSelf: "center",
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#1e293b",
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPassword: {
    color: "#1f2937",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

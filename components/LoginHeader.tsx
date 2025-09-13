import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function LoginHeader({ onSignUp }) {
  return (
    <View style={styles.header}>
    <Text style={styles.title}>Login</Text>
    <View style={styles.signUpContainer}>
    <Text style={styles.signUpText}>Don't have an account?</Text>
    <Pressable onPress={onSignUp}>
    <Text style={styles.signUpLink}> Sign up</Text>
    </Pressable>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 16,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  signUpText: {
    fontSize: 14,
    color: "#6b7280",
  },
  signUpLink: {
    fontSize: 14,
    color: "#3b82f6",
    fontWeight: "500",
  },
});

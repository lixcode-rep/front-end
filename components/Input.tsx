import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input({ value, onChange, placeholder, secure = false }) {
  return (
    <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor="#9ca3af"
    value={value}
    onChangeText={onChange}
    secureTextEntry={secure}
    autoCapitalize="none"
    autoCorrect={false}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: "#1f2937",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
});

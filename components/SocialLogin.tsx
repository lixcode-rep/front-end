import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SocialLogin({ onSocialPress }) {
  return (
    <View style={styles.socialLogin}>
    <Text style={styles.orText}>or login with</Text>
    <View style={styles.socialButtons}>
    <TouchableOpacity
    style={styles.socialButton}
    onPress={() => onSocialPress("Google")}
    >
    <Icon name="google" size={20} color="#db4437" />
    </TouchableOpacity>

    <TouchableOpacity
    style={styles.socialButton}
    onPress={() => onSocialPress("Facebook")}
    >
    <Icon name="facebook" size={20} color="#4267B2" />
    </TouchableOpacity>

    <TouchableOpacity
    style={styles.socialButton}
    onPress={() => onSocialPress("Apple")}
    >
    <Icon name="apple" size={20} color="#000000" />
    </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  socialLogin: {
    alignItems: "center",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 8,
  },
  orText: {
    fontSize: 14,
    color: "#9ca3af",
    marginBottom: 24,
  },
});

import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const TariffButton = ({ onPress, title = 'Switch to daytime tariff', icon = '☀️' }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{icon} {title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#333',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default TariffButton;

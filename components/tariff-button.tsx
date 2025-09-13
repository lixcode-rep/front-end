import React from 'react';
import { View, Pressable, Text, StyleSheet, Image } from 'react-native';

const TariffButton = ({ onPress, title = 'Switch to daytime tariff', icon = require('../assets/sun.png') }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
    <View style={styles.content}>
    <Image style={styles.icon} source={icon} />
    <Text style={styles.buttonText}>{title}</Text>
    </View>
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
  icon: {
    width: 25,
    height: 25,
    marginRight: 8, // spacing between icon and text
    resizeMode: 'contain',
    tintColor: 'white', // optional, recolor the icon if it's monochrome
  },
  content: {
    flexDirection: 'row', // put icon and text side by side
    alignItems: 'center',
  },
});

export default TariffButton;

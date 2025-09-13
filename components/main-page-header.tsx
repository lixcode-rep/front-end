import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ userName, avatarColor = '#ff6b35' }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.greeting}>Hi, {userName}</Text>
    <View style={[styles.avatar, { backgroundColor: avatarColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;

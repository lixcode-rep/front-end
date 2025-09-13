import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import PropertyCard from './property-card';

function onAddPress() {

}

const PropertiesSectionHeader = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>My properties</Text>
    <Pressable onPress={onAddPress}>
    <Text style={styles.addButton}>+ Add</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  addButton: {
    fontSize: 16,
    color: '#1976d2',
    fontWeight: '500',
  },
});

export default PropertiesSectionHeader;

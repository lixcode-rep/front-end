import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import PropertyCard from './property-card';

const PropertiesSection = ({ properties, onAddPress }) => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.title}>My properties</Text>
    <Pressable onPress={onAddPress}>
    <Text style={styles.addButton}>+ Add</Text>
    </Pressable>
    </View>

    {properties.map((property, index) => (
      <PropertyCard key={index} property={property} />
    ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
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

export default PropertiesSection;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatCard = ({ label, value, change, backgroundColor, changeColor = '#4caf50' }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
    {change && (
      <Text style={[styles.change, { color: changeColor }]}>{change}</Text>
    )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  change: {
    fontSize: 12,
  },
});

export default StatCard;

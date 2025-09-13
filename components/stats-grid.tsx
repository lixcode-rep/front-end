import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import StatCard from './stat-card';

const StatsGrid = ({ stats, onHistoryPress }) => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.title}>Overall data</Text>
    <Pressable onPress={onHistoryPress}>
    <Text style={styles.historyLink}>📈 History</Text>
    </Pressable>
    </View>

    <View style={styles.grid}>
    {stats.map((stat, index) => (
      <StatCard
      key={index}
      label={stat.label}
      value={stat.value}
      change={stat.change}
      backgroundColor={stat.backgroundColor}
      />
    ))}
    </View>
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
  historyLink: {
    fontSize: 14,
    color: '#1976d2',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default StatsGrid;


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropertyCard = ({ property }) => {
  return (
    <View style={styles.card}>
    <View style={styles.header}>
    <Text style={styles.title}>{property.name}</Text>
    <Text style={styles.type}>{property.type}</Text>
    </View>

    <View style={styles.stats}>
    <View style={styles.statItem}>
    <Text style={styles.statValue}>{property.production}</Text>
    <Text style={styles.statLabel}>Production</Text>
    </View>

    <View style={styles.statItem}>
    <Text style={styles.statValue}>{property.price}</Text>
    <Text style={styles.statLabel}>Price</Text>
    </View>

    <View style={styles.statItem}>
    <Text style={styles.statValue}>{property.guests}</Text>
    <Text style={styles.statLabel}>Guests</Text>
    </View>
    </View>

    <View style={styles.dates}>
    {property.dates.map((date, index) => (
      <Text key={index} style={styles.dateText}>{date}</Text>
    ))}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  type: {
    fontSize: 14,
    color: '#666',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
  },
  statValue: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    color: '#666',
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 12,
    color: '#666',
  },
});

export default PropertyCard;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export const AchievementCard = ({ title, subtitle, description, icon = '🏆' }) => {
  return (
    <View style={styles.card}>
    <View style={styles.cardHeader}>
    <View style={styles.iconContainer}>
    <Image
      source={require('../assets/trophy.png')}
      style={styles.iconImage}
    />
    </View>
    <View style={styles.cardContent}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSubtitle}>{subtitle}</Text>
    <Text style={styles.description}>{description}</Text>
    </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e8f5e8',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 24,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  iconImage: {
    width: 60,
    height: 60,
  },
});

export default AchievementCard;

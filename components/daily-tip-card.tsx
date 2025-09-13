import React from 'react';
import { View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export const DailyTipCard = ({ progress, title, subtitle, tip }) => {
  return (
    <View style={styles.card}>
    <View style={styles.cardHeader}>
    <View style={styles.circularProgress}>
    <Image
      source={require('../assets/circular_pie.png')}
      style={styles.circularImage}
    />
    <Text style={styles.progressText}>{progress}%</Text>
    </View>
    <View style={styles.cardContent}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSubtitle}>{subtitle}</Text>
    <Text style={styles.tipText}>{tip}</Text>
    </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e3f2fd',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
    circularProgress: {
    width: 60,
    height: 60,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  progressText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    position: 'absolute',
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
  tipText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },

  circularImage: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
});

export default DailyTipCard;

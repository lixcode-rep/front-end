import React from 'react';
import { View, Text, Pressable, Switch, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const ChevronRight = () => (
  <View style={styles.chevron}>
  <View style={[styles.chevronLine, { transform: [{ rotate: '45deg' }] }]} />
  <View style={[styles.chevronLine, { transform: [{ rotate: '-45deg' }] }]} />
  </View>
);

const DistrButton = ({ title, subtitle, onPress, showChevron = true, showToggle = false, toggleValue = false, onToggleChange }) => {
  const router = useRouter();
  return (
    <Pressable
    style={({ pressed }) => [
      styles.settingsItem,
      pressed && styles.settingsItemPressed
    ]}
    onPress={onPress}
    disabled={showToggle} // disable press if toggle is shown
    >
    <Image style={styles.icon} source={require('../../assets/gps.png')} />
    <View style={styles.textContainer}>
    <Text style={styles.settingsItemText}>{title}</Text>
    {subtitle && <Text style={styles.settingsItemSubText}>{subtitle}</Text>}
    </View>
    {showChevron && <ChevronRight />}
    {showToggle && (
      <Switch
      value={toggleValue}
      onValueChange={onToggleChange}
      trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
      thumbColor="#FFFFFF"
      ios_backgroundColor="#E5E7EB"
      />
    )}
    </Pressable>
  );
};

export default DistrButton;

const styles = StyleSheet.create({
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 8,
  },
  settingsItemPressed: {
    backgroundColor: '#F9FAFB',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  settingsItemText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '400',
    marginBottom: 2, // Small space between title and subtitle
  },
  settingsItemSubText: {
    fontSize: 12, // Smaller than before
    color: '#6B7280', // Slightly darker for better readability
    fontWeight: '400',
  },
  chevron: {
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  chevronLine: {
    position: 'absolute',
    width: 8,
    height: 2,
    backgroundColor: '#9CA3AF',
    borderRadius: 1,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
});

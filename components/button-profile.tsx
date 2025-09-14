import React from 'react';
import { View, Text, Pressable, Switch, StyleSheet } from 'react-native';

const ChevronRight = () => (
  <View style={styles.chevron}>
  <View style={[styles.chevronLine, { transform: [{ rotate: '45deg' }] }]} />
  <View style={[styles.chevronLine, { transform: [{ rotate: '-45deg' }] }]} />
  </View>
);

const SettingsItem = ({ title, onPress, showChevron = false, showToggle = false, toggleValue = false, onToggleChange }) => {
  return (
    <Pressable
    style={({ pressed }) => [
      styles.settingsItem,
      pressed && styles.settingsItemPressed
    ]}
    onPress={onPress}
    disabled={showToggle} // disable press if toggle is shown
    >
    <Text style={styles.settingsItemText}>{title}</Text>
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

export default SettingsItem;

const styles = StyleSheet.create({
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16, // Match infoContainer padding
    paddingVertical: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 8, // Standard spacing between buttons
  },
  settingsItemGrouped: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16, // Match infoContainer padding
    paddingVertical: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 4, // Closer spacing for grouped items
  },
  settingsItemSeparated: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16, // Match infoContainer padding
    paddingVertical: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 16, // Larger spacing for separated sections
  },
  settingsItemPressed: {
    backgroundColor: '#F9FAFB',
  },
  settingsItemText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
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
  // Optional: Add a container style for the buttons list
  buttonsContainer: {
    // Remove paddingHorizontal since we're using marginHorizontal on individual items
  },
});

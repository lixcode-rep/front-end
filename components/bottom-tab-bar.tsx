import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

const TabItem = ({ icon, label, isActive, onPress }) => (
  <Pressable style={styles.tabItem} onPress={onPress}>
  <Image source={icon} style={[styles.tabIcon, isActive && styles.activeIcon]} />
  <Text style={[styles.tabLabel, isActive && styles.activeTab]}>
  {label}
  </Text>
  </Pressable>
);

const BottomTabBar = ({ activeTab, onTabPress }) => {
  const tabs = [
    { id: 'dashboard', icon: require('../assets/clock.png'), label: 'Dashboard' },
    { id: 'energy', icon: require('../assets/lightning.png'), label: 'Energy' },
    { id: 'calculator', icon: require('../assets/calculator.png'), label: 'Calculator' },
    { id: 'profile', icon: require('../assets/human_icon.png'), label: 'Profile' },
  ];

  return (
    <View style={styles.tabBar}>
    {tabs.map((tab) => (
      <TabItem
      key={tab.id}
      icon={tab.icon}
      label={tab.label}
      isActive={activeTab === tab.id}
      onPress={() => onTabPress(tab.id)}
      />
    ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingBottom: 34,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabIcon: {
    width: 32,
    height: 32,
    marginBottom: 4,
    resizeMode: 'contain',
    tintColor: '#999', // default inactive color
  },
  activeIcon: {
    tintColor: '#1976d2', // active color
  },
  tabLabel: {
    fontSize: 12,
    color: '#999',
  },
  activeTab: {
    color: '#1976d2',
    fontWeight: '500',
  },
});

export default BottomTabBar;

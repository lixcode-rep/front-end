import { useRouter } from 'expo-router';
import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

const TabItem = ({ icon, label, isActive, onPress }) => (
  <Pressable style={styles.tabItem} onPress={onPress}>
  <Image source={icon} style={[styles.tabIcon, isActive && styles.activeIcon]} />
  <Text style={[styles.tabLabel, isActive && styles.activeTab]}>
  {label}
  </Text>
  </Pressable>
);

export type TabId = 'dashboard' | 'energy' | 'calculator' | 'profile' | 'prediction';
interface TabData {
  id: TabId;
  icon: any;
  label: string;
  url: string;
}

const BottomTabBar = ({ activeTab }: {activeTab: TabId}) => {
  const router = useRouter();
  const tabs: TabData[] = [
    { 
      id: 'dashboard', 
      icon: require('../assets/clock.png'), 
      label: 'Dashboard',
      url: "/mainpage"
     },
    { 
      id: 'energy', 
      icon: require('../assets/lightning.png'), 
      label: 'Energy',
      url: "/energy"
    },
    {
      id: 'prediction',
      icon: require('../assets/line-axis.png'),
      label: 'Prediction',
      url: "/prediction"
    },
    { 
      id: 'calculator', 
      icon: require('../assets/calculator.png'), 
      label: 'Calculator',
      url: "/calculator"
    },
    { 
      id: 'profile', 
      icon: require('../assets/human_icon.png'), 
      label: 'Profile',
      url: "/profile"
    },
  ];

  return (
    <View style={styles.tabBar}>
    {tabs.map((tab) => (
      <TabItem
      key={tab.id}
      icon={tab.icon}
      label={tab.label}
      isActive={activeTab === tab.id}
      onPress={() => router.navigate(tab.url)}
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

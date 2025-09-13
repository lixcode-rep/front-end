import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Header from '../components/main-page-header';
import DailyTipCard from '../components/daily-tip-card';
import AchievementCard from '../components/achievement-card';
import StatsGrid from '../components/stats-grid';
import PropertiesSection from '../components/properties-section';
import BottomTabBar from '../components/bottom-tab-bar';

const EnergyDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const statsData = [
    {
      label: 'Current (A)',
      value: '6.2',
      change: '📈 3.5%',
      backgroundColor: '#f3e5f5',
    },
    {
      label: 'Active power (kW)',
      value: '5.0',
      change: '⏱️ 5 Hr. Wk',
      backgroundColor: '#e1bee7',
    },
    {
      label: 'Voltage (V)',
      value: '220',
      backgroundColor: '#fff9c4',
    },
    {
      label: 'Projected monthly gain (eur)',
      value: '125',
      change: '📈 2.25%',
      backgroundColor: '#ffcc80',
    },
  ];

  const propertiesData = [
    {
      name: 'Appartment 1',
      type: 'App',
      production: '1 - 19 560 W/month',
      price: '1 299.99 lei/kW',
      guests: '1 - 19',
      dates: ['2022-05-09', '0.4', '2022'],
    },
  ];

  const handleHistoryPress = () => {
    console.log('History pressed');
  };

  const handleAddProperty = () => {
    console.log('Add property pressed');
  };

  const handleTabPress = (tabId) => {
    setActiveTab(tabId);
    console.log(`Tab ${tabId} pressed`);
  };

  return (
    <View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

    <Header userName="Daniel" />

    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
    <DailyTipCard
    progress={40}
    title="Daily tip"
    subtitle="Save on laundry"
    tip="Use 40% less energy between 6 PM and 8 PM"
    />

    <AchievementCard
    title="Eco-specialist"
    subtitle="Congratulations!"
    description="Congrats! You've saved 3.5 kWh in this week in your Chisinau properties"
    />

    <StatsGrid
    stats={statsData}
    onHistoryPress={handleHistoryPress}
    />

    <PropertiesSection
    properties={propertiesData}
    onAddPress={handleAddProperty}
    />

    <View style={styles.bottomSpacing} />
    </ScrollView>

    <BottomTabBar
    activeTab={activeTab}
    onTabPress={handleTabPress}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  bottomSpacing: {
    height: 100,
  },
});

export default EnergyDashboard;

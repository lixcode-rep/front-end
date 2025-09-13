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
import PropertiesSectionHeader from '../components/properties-section-header';

const EnergyDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const statsData = [
    {
      label: 'Current (A)',
      value: '6.2',
      change: '📈 3.5%',
      backgroundColor: '#f7cbff',
    },
    {
      label: 'Active power (kW)',
      value: '5.0',
      change: '⏱️ 5 Hr. Wk',
      backgroundColor: '#c2b4ff',
    },
    {
      label: 'Voltage (V)',
      value: '220',
      backgroundColor: '#edff77',
    },
    {
      label: 'Projected monthly gain (eur)',
      value: '125',
      change: '📈 2.25%',
      backgroundColor: '#efb762',
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

    <PropertiesSectionHeader />

    <ScrollView
    style={styles.appartmentContent}
    horizontal                     // enable left-right scroll
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ flexDirection: 'row', paddingRight: 20 }}
    >
    {propertiesData.map((property, index) => (
      <PropertiesSection
      key={index}
      properties={[property]}     // pass each property as an array
      onAddPress={handleAddProperty}
      style={{ marginRight: 15 }} // spacing between cards
      />
    ))}
    </ScrollView>

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
  appartmentContent: {
    flex: 0,
    paddingVertical: 20,
  }
});

export default EnergyDashboard;

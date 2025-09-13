import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import PersonalInfoRow from '../components/personal-info-row';
import ProfileComponent from '../components/profile-avatar';
import BottomTabBar from '../components/bottom-tab-bar';

export default function Page() {
  const [activeTab, setActiveTab] = useState('profile');

  const personalData = [
    { label: 'Account number', values: '6745 1147 6895 4125' },
    { label: 'Username', values: 'Daniel' },
    { label: 'Email', values: 'andr150895@gmail.com' },
    { label: 'Mobile phone', values: '+68 95 83 95' },
    {
      label: 'Addresses',
      values: [
        'Strada Mihai Eminescu 45, Chișinău, Moldova, MD-2012',
        'Strada Ștefan cel Mare 102, Bălți, Moldova, MD-3100',
      ],
    },
  ];

  const handleTabPress = (tabId) => {
    setActiveTab(tabId);
    console.log(`Tab ${tabId} pressed`);
  };

  return (
    <View style={styles.container}>
    {/* Scrollable content */}
    <ScrollView contentContainerStyle={styles.content}>
    <ProfileComponent />
    <PersonalInfoRow title="Personal information" data={personalData} />
    </ScrollView>

    {/* Fixed bottom tab bar */}
    <BottomTabBar activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // take full screen
  },
  content: {
    paddingBottom: 100, // make space so content doesn’t overlap with tab bar
  },
});

import React, { useState } from 'react';
import { View, Text, Pressable, Switch, StyleSheet, ScrollView, Image } from 'react-native';

import PersonalInfoRow from '../components/personal-info-row';
import ProfileComponent from '../components/profile-avatar';
import BottomTabBar from '../components/bottom-tab-bar';
import SettingsItem from '../components/button-profile'

const handleTermsAndConditions = () => {};
const handleFinancialAgreement = () => {};
const handleGDPR = () => {};


export default function Page() {
  const [activeTab, setActiveTab] = useState('profile');
  const [shareStats, setShareStats] = useState(false);

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

  const handleChangePassword = () => {
    console.log('Change password pressed');
  };

  const handleShareStatsToggle = (value) => {
    setShareStats(value);
    console.log('Share stats:', value);
  };

  const handleTabPress = (tabId) => {
    setActiveTab(tabId);
    console.log(`Tab ${tabId} pressed`);
  };

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.content}>
    <ProfileComponent />
    <PersonalInfoRow title="Personal information" data={personalData} />

    <SettingsItem
    title="Change password"
    onPress={handleChangePassword}
    showChevron={true}
    icon={require('../assets/pressable_icon.png')} // Add your icon path here
    />

    <SettingsItem
    title="Share all statistics data with providers"
    showToggle={true}
    toggleValue={shareStats}
    onToggleChange={handleShareStatsToggle}
    icon={require('../assets/pressable_icon.png')} // Add your icon path here
    />

    {/* Privacy Section */}
    <View style={styles.section}>
    <Text style={styles.sectionTitle}>Privacy</Text>
    </View>
    <SettingsItem
    title="Terms and conditions"
    onPress={handleTermsAndConditions}
    showChevron={true}
    icon={require('../assets/pressable_icon.png')} // Add your icon path here
    />

    <SettingsItem
    title="Financial agreement"
    onPress={handleFinancialAgreement}
    showChevron={true}
    icon={require('../assets/pressable_icon.png')} // Add your icon path here
    />

    <SettingsItem
    title="General Data Protection Regulation"
    onPress={handleGDPR}
    showChevron={true}
    icon={require('../assets/pressable_icon.png')} // Add your icon path here
    />

    </ScrollView>

    {/* Fixed bottom tab bar */}
    <BottomTabBar activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  content: {
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 24,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  settingsItemPressed: {
    backgroundColor: '#F9FAFB',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
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
    position: 'relative',
  },
  chevronLine: {
    position: 'absolute',
    width: 8,
    height: 2,
    backgroundColor: '#9CA3AF',
    borderRadius: 1,
  },
});

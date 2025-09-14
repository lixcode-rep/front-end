import React, { useState } from 'react';
import { View, Text, Pressable, Switch, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

import PersonalInfoRow from '../components/personal-info-row';
import ProfileComponent from '../components/profile-avatar';
import SettingsItem from '../components/button-profile'
import DistrButton from '../components/distributor/distr-button'


export default function Page() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState('');

  const personalData = [
    { label: 'Username', values: 'Daniel' }];

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.content}>
    <ProfileComponent />
    <PersonalInfoRow title="Personal information" data={personalData} />

    <View style={styles.section}>
    <Text style={styles.section}>Check among</Text>

    <DistrButton title='Municipalities' />
    <DistrButton title='Districts' onPress={() => router.push('./districts')} />

    </View>

    </ScrollView>

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
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
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

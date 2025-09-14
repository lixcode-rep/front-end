import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

const DistributorDashboard = () => {
  const router = useRouter();

  const [expandedDistrict, setExpandedDistrict] = useState('Anenii Noi');

  const districts = [
    {
      name: 'Anenii Noi',
      currentUsage: '980 MW today',
      peakTime: '17:30-19:30',
      peakLabel: 'Peak Usage Times',
      comparison: '5% higher than yesterday',
      comparisonColor: '#ef4444',
      currentStatus: '230 MW',
      statusLabel: 'Current Status',
      peakConsumption: '245 MW',
      peakLabel2: 'Consumption at Peak',
      warning: 'Approaching peak',
      warningColor: '#f59e0b'
    },
    {
      name: 'Basarabeasca',
      currentUsage: '340 MW today',
      peakTime: '18:00-20:00',
      peakLabel: 'Peak Usage Times',
      comparison: '2% lower than yesterday',
      comparisonColor: '#22c55e',
      currentStatus: '85 MW',
      statusLabel: 'Current Status',
      peakConsumption: '95 MW',
      peakLabel2: 'Consumption at Peak',
      warning: 'Normal',
      warningColor: '#22c55e'
    },
    {
      name: 'Briceni',
      currentUsage: '520 MW today',
      peakTime: '17:00-19:00',
      peakLabel: 'Peak Usage Times',
      comparison: '1% higher than yesterday',
      comparisonColor: '#ef4444',
      currentStatus: '145 MW',
      statusLabel: 'Current Status',
      peakConsumption: '165 MW',
      peakLabel2: 'Consumption at Peak',
      warning: 'Normal',
      warningColor: '#22c55e'
    },
    {
      name: 'Cahul',
      currentUsage: '720 MW today',
      peakTime: '18:30-20:30',
      peakLabel: 'Peak Usage Times',
      comparison: '3% higher than yesterday',
      comparisonColor: '#ef4444',
      currentStatus: '190 MW',
      statusLabel: 'Current Status',
      peakConsumption: '210 MW',
      peakLabel2: 'Consumption at Peak',
      warning: 'Monitor closely',
      warningColor: '#f59e0b'
    },
    {
      name: 'Cantemir',
      currentUsage: '450 MW today',
      peakTime: '17:30-19:30',
      peakLabel: 'Peak Usage Times',
      comparison: '4% lower than yesterday',
      comparisonColor: '#22c55e',
      currentStatus: '120 MW',
      statusLabel: 'Current Status',
      peakConsumption: '135 MW',
      peakLabel2: 'Consumption at Peak',
      warning: 'Normal',
      warningColor: '#22c55e'
    },
    {
      name: 'Calarasi',
      currentUsage: '680 MW today',
      peakTime: '18:00-20:00',
      peakLabel: 'Peak Usage Times',
      comparison: '2% higher than yesterday',
      comparisonColor: '#ef4444',
      currentStatus: '175 MW',
      statusLabel: 'Current Status',
      peakConsumption: '195 MW',
      peakLabel2: 'Consumption at Peak',
      warning: 'Normal',
      warningColor: '#22c55e'
    }
  ];

  const toggleDistrict = (districtName) => {
    setExpandedDistrict(expandedDistrict === districtName ? null : districtName);
  };

  // Simple chevron icons as text (replace with actual icons)
  const ChevronRight = () => <Text style={styles.iconText}>›</Text>;
  const ChevronUp = () => <Text style={styles.iconText}>^</Text>;
  const ChevronDown = () => <Text style={styles.iconText}>v</Text>;
  const ArrowLeft = () => <Text style={styles.iconText}>‹</Text>;
  const BuildingIcon = () => <Image style={styles.iconWhite} source={require('../assets/map.png')}/>;
  const LocationIcon = () => <Image style={styles.iconWhite} source={require('../assets/gps.png')}/>;
  const WarningIcon = () => <Text style={styles.warningIcon}>⚠️</Text>;

  return (
    <ScrollView style={styles.container}>
    <View style={styles.header}>
    <View style={styles.headerLeft}>
    </View>
    </View>
    <View style={styles.headerRight}>
    <ArrowLeft />
    <Pressable style={styles.headerRightText} onPress={() => router.push('./distr-page')}>All areas</Pressable>
    </View>

    {/* Check Among Section */}
    <View style={styles.section}>
    </View>

    {/* Districts Section */}
    <View style={styles.section}>
    <Text style={styles.sectionTitleLarge}>Districts</Text>

    {districts.map((district) => (
      <View key={district.name} style={styles.districtContainer}>
      <TouchableOpacity
      style={styles.districtHeader}
      onPress={() => toggleDistrict(district.name)}
      >
      <View style={styles.districtHeaderLeft}>
      <View style={styles.districtIcon}>
      <LocationIcon />
      </View>
      <Text style={styles.districtName}>{district.name}</Text>
      </View>
      {expandedDistrict === district.name ? <ChevronUp /> : <ChevronDown />}
      </TouchableOpacity>

      {expandedDistrict === district.name && (
        <View style={styles.districtDetails}>
        <View style={styles.detailRow}>
        <View style={styles.detailLeft}>
        <Text style={styles.detailValue}>{district.currentUsage}</Text>
        <Text style={styles.detailLabel}>Total Energy Consumption</Text>
        </View>
        <View style={styles.detailRight}>
        <Text style={styles.detailValue}>{district.peakTime}</Text>
        <Text style={styles.detailLabel}>{district.peakLabel}</Text>
        </View>
        </View>

        <Text style={[styles.comparison, { color: district.comparisonColor }]}>
        {district.comparison}
        </Text>

        <View style={styles.detailRow}>
        <View style={styles.detailLeft}>
        <Text style={styles.detailValue}>{district.currentStatus}</Text>
        <Text style={styles.detailLabel}>{district.statusLabel}</Text>
        </View>
        <View style={styles.detailRight}>
        <Text style={styles.detailValue}>{district.peakConsumption}</Text>
        <Text style={styles.detailLabel}>{district.peakLabel2}</Text>
        </View>
        </View>

        <View style={styles.warningContainer}>
        {district.warning !== 'Normal' && <WarningIcon />}
        <Text style={[styles.warningText, { color: district.warningColor }]}>
        {district.warning}
        </Text>
        </View>
        </View>
      )}
      </View>
    ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9fafb',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginRight: 12,
  },
  profilePic: {
    width: 32,
    height: 32,
    backgroundColor: '#3b82f6',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRightText: {
    color: '#6b7280',
    fontSize: 14,
    marginLeft: 8,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
  sectionTitleLarge: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    marginBottom: 12,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#1f2937',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuItemText: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  menuItemSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  districtContainer: {
    marginBottom: 8,
  },
  districtHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 8,
  },
  districtHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  districtIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#1f2937',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  districtName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  districtDetails: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderTopWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailLeft: {
    flex: 1,
  },
  detailRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  detailLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  comparison: {
    fontSize: 14,
    marginBottom: 16,
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  warningText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  iconText: {
    fontSize: 18,
    color: '#9ca3af',
  },
  iconWhite: {
    width: 35,
    height: 35,
    fontSize: 16,
  },
  warningIcon: {
    fontSize: 16,
  },
});

export default DistributorDashboard;

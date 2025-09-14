import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PersonalInfoRow = ({ title, data }) => {
  const InfoRow = ({ label, values, isLast = false }) => (
    <View style={[styles.row, !isLast && styles.rowBorder]}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.valueContainer}>
    {Array.isArray(values) ? (
      values.map((value, index) => (
        <Text key={index} style={[styles.value, index > 0 && styles.additionalValue]}>
        {value}
        </Text>
      ))
    ) : (
      <Text style={styles.value}>{values}</Text>
    )}
    </View>
    </View>
  );

  return (
    <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.infoContainer}>
    {data.map((item, index) => (
      <InfoRow
      key={index}
      label={item.label}
      values={item.values}
      isLast={index === data.length - 1}
      />
    ))}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // Remove the padding: 16 here
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  infoContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 8, // Add margin to match button spacing
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'flex-start',
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  valueContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  value: {
    fontSize: 16,
    color: '#666',
    textAlign: 'right',
  },
  additionalValue: {
    marginTop: 4,
  },
});

export default PersonalInfoRow;

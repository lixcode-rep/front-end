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
    padding: 16,
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

// Example usage:
/*
const ExampleUsage = () => {
  const personalData = [
    {
      label: 'Account number',
      values: '6745 1147 6895 4125',
    },
    {
      label: 'Username',
      values: 'Daniel',
    },
    {
      label: 'Email',
      values: 'andr150895@gmail.com',
    },
    {
      label: 'Mobile phone',
      values: '+68 95 83 95',
    },
    {
      label: 'Addresses',
      values: [
        'Strada Mihai Eminescu 45, Chișinău, Moldova, MD-2012',
        'Strada Ștefan cel Mare 102, Bălți, Moldova, MD-3100'
      ],
    },
  ];

  return (
    <PersonalInfoRow
    title="Personal information"
    data={personalData}
    />
  );
};
*/

export default PersonalInfoRow;

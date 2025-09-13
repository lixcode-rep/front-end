import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PersonalInfoRow from '../components/personal-info-row';

export default function Page () {
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
}

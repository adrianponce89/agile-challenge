import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { DetailsProps } from '../../types';
import styles from './styles';

const Details = ({ navigation }: DetailsProps) => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Details</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Details;

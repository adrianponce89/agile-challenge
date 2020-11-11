import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button } from 'react-native';
import { HomeProps } from '../../types';
import styles from './styles';

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;

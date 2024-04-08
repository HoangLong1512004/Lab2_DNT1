import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HH from './Lab/bai2';
import Main from './Lab/Main';
import AA from './Lab/bai1';
import Bai3 from './Lab/Bai3';
import Bai1 from './Lab/bai1';

export default function App() {
  return (
  <View>
    <HH/>
    {/* <AA/> */}
    {/* <Bai3/> */}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

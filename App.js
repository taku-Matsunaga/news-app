import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <AppNavigator>
      <StatusBar style="auto" />
    </AppNavigator>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

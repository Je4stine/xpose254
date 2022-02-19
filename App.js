import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Homepage from './components/screens/Home';
import Profile1 from './components/screens/Profile1';
import Profile2 from './components/screens/Profile2';
import Profile3 from './components/screens/Profile3';
import Profile4 from './components/screens/Profile4';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Profile4/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

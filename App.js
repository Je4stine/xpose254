import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState}from 'react';
import { StyleSheet, Text, View, SafeAreaView,} from 'react-native';
import GlobalStyles from './components/GlobalStyles';
import StackNavigator from './components/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserProvider} from './components/userContext';

export default function App() {


  return (
    <UserProvider>
      <SafeAreaView style={styles.container}>
         <StatusBar
            barStyle="light-content"
            translucent={false}
            backgroundColor="transparent"/>
            <StackNavigator/>     
      </SafeAreaView>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black"
  },
});

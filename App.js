import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState}from 'react';
import { StyleSheet, Text, View, SafeAreaView,} from 'react-native';
import GlobalStyles from './components/GlobalStyles';
import StackNavigator from './components/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';
import {ProfileProvider} from './components/ProfileContext';

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

export default function App() {

// const [isFirstLaunch, setisFirstLaunch] = useState(null);

//   useEffect(() => {
//     AsyncStorage.getItem('alreadyLaunched').then(value=>{
//       if(value==null){
//         AsyncStorage.setItem('alreadyLaunched', 'true');
//         setisFirstLaunch(true);
//       } else{
//         setisFirstLaunch(false)
//       }
//     });
//   } , []);

//   if(isFirstLaunch==null){
//     return null;
//   } else if(isFirstLaunch==true){
//     console.log('first launch');
//   }else{
//     console.log('not first launch');
//   }

  return (
    
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <StackNavigator/>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

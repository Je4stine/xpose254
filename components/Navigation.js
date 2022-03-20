import React, {useEffect,useState}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from './screens/Home';
import Profile1 from './screens/Profile1';
import Profile2 from './screens/Profile2';
import Profile3 from './screens/Profile3';
import Profile4 from './screens/Profile4';
import Chat from './screens/Chat';
import ChatRoom from './screens/ChatRoom';
import User from './screens/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
// const HomeStack = createNativeStackNavigator();



export default function StackNavigator (){

const [isFirstLaunch, setisFirstLaunch] = useState(null);
useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value=>{
      if(value==null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setisFirstLaunch(true);
      } else{
        setisFirstLaunch(false)
      }
    });
  } , []);

    if(isFirstLaunch==null){
        return null;
      } else if(isFirstLaunch==true){
        return(
            // <NavigationContainer>
            //     <Stack.Navigator screenOptions={{headerShown: false}}>
            //         <Stack.Screen name="Profile1" component={Profile1} />
            //         <Stack.Screen name="Profile2" component={Profile2}/>
            //         <Stack.Screen name="Profile3" component={Profile3}/>
            //         <Stack.Screen name="Profile4" component={Profile4}/>
            //         <Stack.Screen name="Home" component={Homepage}/>
            //         <Stack.Screen name="Chat" component={Chat}/>
            //         <Stack.Screen name="ChatRoom" component={ChatRoom}/>
            //         <Stack.Screen name="User" component={User}/>
            //     </Stack.Navigator>
            // </NavigationContainer>
            console.log("First launch")
        )
      }else{
        return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    {/* <Stack.Screen name="Profile1" component={Profile1} />
                    <Stack.Screen name="Profile2" component={Profile2}/>
                    <Stack.Screen name="Profile3" component={Profile3}/>
                    <Stack.Screen name="Profile4" component={Profile4}/> */}
                    <Stack.Screen name="Home" component={Homepage}/>
                    <Stack.Screen name="Chat" component={Chat}/>
                    <Stack.Screen name="ChatRoom" component={ChatRoom}/>
                    <Stack.Screen name="User" component={User}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
};

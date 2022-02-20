import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from './screens/Home';
import Profile1 from './screens/Profile1';
import Profile2 from './screens/Profile2';
import Profile3 from './screens/Profile3';
import Profile4 from './screens/Profile4';

const Stack = createNativeStackNavigator();

const StackNavigator= ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Profile1" component={Profile1} 
                />
                <Stack.Screen name="Profile2" component={Profile2}/>
                <Stack.Screen name="Profile3" component={Profile3}/>
                <Stack.Screen name="Profile4" component={Profile4}/>
                <Stack.Screen name="Home" component={Homepage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default StackNavigator;
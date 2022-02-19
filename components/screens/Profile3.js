import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

export default function Profile3() {
    const [value, setValue] = useState('Male');
  return (
    <>
        <View>
            <Text style={{fontSize: 30, fontWeight: 'bold', color:'red', marginTop:40, alignSelf: 'center'}}>Profile</Text>
        </View>
        <View style={{alignItems:'center', justifyContent:'center', marginTop: '30%'}}>  
        <Text style={styles.profileText}>What is your gender? </Text>

        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
         <View style={{flexDirection:'row', marginTop:20}}>   
        <View>
        <Text>Male</Text>
        <RadioButton value="Male" />
        </View>
        <View>
        <Text>Female</Text>
            <RadioButton value="Female" />
        </View>
        </View>
        </RadioButton.Group>
        </View>

        <View style={{alignItems:'center', justifyContent:'center',}}> 
        <Text style={styles.profileText}>Which gender are you interested in? </Text>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
         <View style={{flexDirection:'row', marginTop:20}}>   
        <View>
        <Text>Male</Text>
        <RadioButton value="Male" />
        </View>
        <View>
        <Text>Female</Text>
            <RadioButton value="Female" />
        </View>
        </View>
        </RadioButton.Group>
        </View>
        <View style={{alignItems:'center', justifyContent:'center'}}>  
        <Text style={styles.profileText}>How old are you?</Text>
        <TextInput
        style={styles.userNameInput}
        placeholder="Enter your age"
        keyboardType='numeric'
        // onChange={}
        />
        </View>
    </>
  )
};

const styles = StyleSheet.create({
    userNameInput:{
        borderColor: 'black',
        borderBottomWidth: 1,
        margin: 10,
        width: '80%',
    },
    profileText:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
});
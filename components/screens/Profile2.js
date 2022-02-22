import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Profile2({navigation}) {
    const [value, setValue] = useState('first');
  return (
    <>
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold', color:'red', marginTop:40, alignSelf: 'center'}}>Profile</Text>
    </View>
    <View style={{alignItems:'center', justifyContent:'center', marginTop: '30%'}}>  
        <Text style={styles.profileText}>What is your City</Text>
        <TextInput
        style={styles.userNameInput}
        placeholder="Enter your City"
        // onChange={}
        />
        <Text style={styles.profileText}>Your area Location</Text>
        <TextInput
        style={styles.userNameInput}
        placeholder="Enter your area Location"
        // onChange={}
        />
        <Text style={styles.profileText}> Will you Host?</Text>
        
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
         <View style={{flexDirection:'row', marginTop:20}}>   
        <View>
        <Text>Yes</Text>
        <RadioButton value="first" />
        </View>
        <View>
        <Text>No</Text>
            <RadioButton value="second" />
        </View>
        </View>
        </RadioButton.Group>
        
    </View>
    <View style={{alignItems:'flex-end', marginRight:30, position:'absolute', bottom:10, width:'95%'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile3')}>
          <View style={{flexDirection:'row'}}> 
            <Text style={{fontSize:20, marginRight:5}}>Next</Text>
            <FontAwesome name="arrow-right" size={10} color="black" style={{ margin:5}}/>
          </View>
          </TouchableOpacity>
        </View>

        <View style={{alignItems:'flex-start', marginRight:30, position:'absolute', bottom:10, width:'95%'}}>
          <TouchableOpacity onPress={()=>navigation.push('Profile1')}>
          <View style={{flexDirection:'row'}}> 
            <FontAwesome name="arrow-left" size={10} color="black" style={{ margin:5}}/>
            <Text style={{fontSize:20, marginLeft:5}}>Previous</Text>
          </View>
          </TouchableOpacity>
        </View>
    </>
  )
}

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
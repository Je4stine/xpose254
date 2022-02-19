import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function Profile1() {
  return (
    <>
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold', color:'red', marginTop:40, alignSelf: 'center'}}>Profile</Text>
    </View>
    <View style={{alignItems:'center', justifyContent:'center', marginTop: '30%'}}>  
        <Text style={styles.profileText}>Your Username</Text>
        <TextInput
        style={styles.userNameInput}
        placeholder="Enter your Username"
        // onChange={}
        />
        <Text style={styles.profileText}>What do you expect from the Hookup?</Text>
        <TextInput
        style={styles.userNameInput}
        placeholder="Write a description"
        // onChange={}
        />
        <Text style={styles.profileText}> Your Contact info(Optional)</Text>
        <TextInput
        style={styles.userNameInput}
        placeholder="eg. Phone number"
        // onChange={}
        />
        
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

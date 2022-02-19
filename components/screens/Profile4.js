import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


export default function Profile4() {

  return (
    <>
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold', color:'red', marginTop:40, alignSelf: 'center'}}>Profile</Text>
    </View>
    <View style={{alignItems:'center', justifyContent:'center', marginTop: '20%'}}>  
        <Text style={styles.profileText}>Add your sexiest photo</Text>
    </View>

    <Image source={require('../../assets/user.png')} style={{ width:100, height: 100, alignSelf:'center'}}/>

    <View style={{ position:'absolute', bottom:10}}>
    <TouchableOpacity><View style={{backgroundColor:'blue', height:40, justifyContent:'center',alignItems:'center', marginBottom:10}}><Text style={{color:'#fff', fontSize:13, fontWeight:'bold'}}> Choose from Libary </Text></View></TouchableOpacity>
    <TouchableOpacity><View style={{backgroundColor:'blue', height:40, justifyContent:'center',alignItems:'center'}}><Text style={{color:'#fff', fontSize:13, fontWeight:'bold'}}>Take a photo</Text></View></TouchableOpacity>
    </View>
    </>
  )
};

const styles = StyleSheet.create({
    profileText:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
});
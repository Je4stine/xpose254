import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, {useContext, useState}from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { UserContext } from './../userContext';

export default function User(props) {

  const {userState, setUserState}=useContext(UserContext);
  return (
    <View>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom: 10, marginTop:10}}>
          <TouchableOpacity onPress={()=>props.navigation.goBack('Home')}>
          <FontAwesome name="close" size={30} color="black" style={{ marginLeft:10}}/>
          </TouchableOpacity>
          <FontAwesome name="pencil" size={30} color="black" style={{marginRight:10}}/>
      </View>
      <View>
          <Image source={{uri: userState.image}} style={{ height:150, width:150, resizeMode:'contain', alignSelf:'center', borderRadius:30, marginBottom:15}}/>
      </View>
      <View style={{alignItems:'center'}}>
          <Text style={styles.textStyle1}>Username</Text>
          <View><Text style={styles.textStyle}>{userState.name}</Text></View>
          <View style={{borderBottomColor:'black', borderBottomWidth:1, width:'90%'}}></View>
          <Text style={styles.textStyle1}>Will you be hosting?</Text>
          <View><Text style={styles.textStyle}>{userState.hostStatus}</Text></View>
          <View style={{borderBottomColor:'black', borderBottomWidth:1, width:'90%'}}></View>
          <Text style={styles.textStyle1}>City</Text>
          <View><Text style={styles.textStyle}>{userState.city}</Text></View>
          <View style={{borderBottomColor:'black', borderBottomWidth:1, width:'90%'}}></View>
          <Text style={styles.textStyle1}>Location</Text>
          <View><Text style={styles.textStyle}>{userState.area}</Text></View>
          <View style={{borderBottomColor:'black', borderBottomWidth:1, width:'90%'}}></View>
          <Text style={styles.textStyle1}>Gender</Text>
          <View><Text style={styles.textStyle}>{userState.gender}</Text></View>
          <View style={{borderBottomColor:'black', borderBottomWidth:1, width:'90%'}}></View>
          <Text style={styles.textStyle1}>Interested In</Text>
          <View><Text style={styles.textStyle}>{userState.interest}</Text></View>
          <View style={{borderBottomColor:'black', borderBottomWidth:1, width:'90%'}}></View>
          <Text style={styles.textStyle1}>Age</Text>
          <View><Text style={styles.textStyle}>{userState.age} Yrs</Text></View>
          <View style={{borderBottomColor:'black', borderBottomWidth:1, width:'90%'}}></View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginBottom:10,
    },
    textStyle1: {
      fontSize: 20,
        fontWeight:'bold',
        marginBottom:10
    }
});
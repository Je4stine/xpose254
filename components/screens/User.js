import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function User({navigation}) {
  return (
    <View>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom: 10, marginTop:10}}>
          <TouchableOpacity onPress={()=>navigation.push('Home')}>
          <FontAwesome name="close" size={30} color="black" style={{ marginLeft:10}}/>
          </TouchableOpacity>
          <FontAwesome name="pencil" size={30} color="black" style={{marginRight:10}}/>
      </View>
      <View>
          <Image source={require('../../assets/manson.jpg')} style={{ height:150, width:150, resizeMode:'contain', alignSelf:'center', borderRadius:30, marginBottom:15}}/>
      </View>
      <View style={{alignItems:'center'}}>
          <Text style={styles.textStyle}>Username</Text>
          <View></View>
          <View style={{borderBottomColor:'black', borderBottomWidth:1, width:'90%'}}></View>
          <Text style={styles.textStyle}>Hosting</Text>
          <View></View>
          <View style={{borderBottomColor:'black', borderBottomWidth:1, width:'90%'}}></View>
          <Text style={styles.textStyle}>City</Text>
          <View></View>
          <View style={{borderBottomColor:'black', borderBottomWidth:1, width:'90%'}}></View>
          <Text style={styles.textStyle}>Location</Text>
          <View></View>
          <View style={{borderBottomColor:'black', borderBottomWidth:1, width:'90%'}}></View>
          <Text style={styles.textStyle}>Gender</Text>
          <View></View>
          <View style={{borderBottomColor:'black', borderBottomWidth:1, width:'90%'}}></View>
          <Text style={styles.textStyle}>Interested In</Text>
          <View></View>
          <View style={{borderBottomColor:'black', borderBottomWidth:1, width:'90%'}}></View>
          <Text style={styles.textStyle}>Age</Text>
          <View></View>
          <View style={{borderBottomColor:'black', borderBottomWidth:1, width:'90%'}}></View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight:'bold',
        marginBottom:10,
    },
});
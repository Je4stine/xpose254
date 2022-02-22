import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';


export default function PostCard() {
  return (
    <View style={{height: 200, width: 150, borderWidth:0.5, borderRadius:10, margin:15, borderColor:'grey'}}>
        <View>
          <Image source={require('../assets/manson.jpg')} style={{ height:150, width:150, resizeMode:'contain', borderTopLeftRadius:30, borderTopRightRadius:30}}/>
        </View>
        <View style={{flexDirection: 'row',  display:'flex',justifyContent:'space-between', position:'absolute', top:10, width:'100%'}}>
              <Text style={{color:'red',marginLeft:5}}>22</Text>
                <View style={{backgroundColor:'green', width:10, height:10,borderRadius:5, marginRight:5}}>
                </View>
        </View>
        <View>
          <Text style={{fontSize:15, marginLeft:10}}>Manson</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', padding:2}}>
          <Text style={{fontSize:18, fontWeight:'bold'}}> Nairobi</Text>
          <Text style={{fontSize:18, color:'red', marginRight:5}}>Locked</Text>
        </View>
    </View>
  )
};
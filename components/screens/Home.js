import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import PostCard from '../PostCard';


const Homepage = () => {
  return (
    <View style={styles.container}>
         <View style={{height: 50, width:'100%', backgroundColor:'black', justifyContent:'space-between',alignItems:'center', flexDirection: 'row', marginBottom:2}}>
            <Text style={{color:'red', fontSize:30, fontWeight:'bold', marginLeft:20}}>xpose254</Text>
            <View style={{flexDirection: 'row'}}> 

                <TouchableOpacity>
                    <Image source={require('../../assets/user.png')} style={{height:35, width:35, margin:10}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="commenting" size={30} color="#fff" style={{margin:10}}/>
                </TouchableOpacity>
            </View>
        </View>
      <ScrollView >
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </View>
      </ScrollView>
    </View>
  )
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
});
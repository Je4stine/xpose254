import { View, Text,TouchableOpacity,Image, StyleSheet, FlatList } from 'react-native';
import React,{useContext, useState, useEffect} from 'react';
import {FAB} from 'react-native-paper';



export default function ChatRoom(props) {
  const [users, setUsers] = useState(null);

  // useEffect(()=>{

  // },[])

  const RenderCard =({item})=>{
    return (
      <TouchableOpacity>
        <View style={styles.mycard}>
          <Image source={require('../../assets/user.png')} style={styles.img}/>
          <View>
            <Text style={styles.text}>
              John Doe
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{flex:1}}>
      {/* <FlatList
      data={users}
      renderItem={({item})=>{return<RenderCard item={item}/>}}
      keyExtractor={(item)=>item.uid}
      /> */}
      <RenderCard/>
      <RenderCard/>
      <RenderCard/>
      <FAB
      style={styles.fab}
      icon="face-profile"
      color="black"
      />

    </View>
  )
};

const styles=StyleSheet.create({
  img:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:"green"
  },
  text:{
    fontSize:18,
    marginLeft:15,

  },
  mycard:{
    flexDirection:"row",
    margin:3,
    padding:4,
    backgroundColor:"white",
    borderBottomWidth:1,
    borderBottomColor:"grey",
  },
  fab:{
    position:'absolute',
    margin:16,
    right:0,
    bottom:0,
    backgroundColor:"white"
  }
})
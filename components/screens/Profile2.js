import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import firebase from '../../firebaseConfig';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";



export default function Profile2(props) {
  const initialState ={
    city: "",
    area : "",
    host: "",
  };
  const [state, setState] = useState(initialState);

  const handleChangeText = (value, city)=>{
    setState({...state, [city]:value});
  };

  const saveNewData = async ()=>{
    if (state.city=== ""){
      alert("Please enter a city");
    }else{

      try{
        await firebase.db.collection("profile").add({
          city:state.city,
          area:state.area,
          host: state.host
        });
        props.navigation.navigate('Profile3');
      }catch(error){
        console.log(error)
      }
    }
  };



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
        onChangeText={(value)=> handleChangeText(value, "city")}
        />
        <Text style={styles.profileText}>Your area Location</Text>
        <TextInput
        style={styles.userNameInput}
        placeholder="Enter your area Location"
        onChangeText={(value)=> handleChangeText(value, "area")}
        />
        <Text style={styles.profileText}> Will you Host?</Text>
        
        <RadioButton.Group onValueChange={(value)=> handleChangeText(value, "host")} >
         <View style={{flexDirection:'row', marginTop:20}}>   
        <View>
        <Text>Yes</Text>
        <RadioButton value="Yes" />
        </View>
        <View>
        <Text>No</Text>
            <RadioButton value="No" />
        </View>
        </View>
        </RadioButton.Group>
        
    </View>
    <View style={{alignItems:'flex-end', marginRight:30, position:'absolute', bottom:10, width:'95%'}}>
          <TouchableOpacity onPress={() => saveNewData()}>
          <View style={{flexDirection:'row'}}> 
            <Text style={{fontSize:20, marginRight:5}}>Next</Text>
            <FontAwesome name="arrow-right" size={10} color="black" style={{ margin:5}}/>
          </View>
          </TouchableOpacity>
        </View>

        <View style={{alignItems:'flex-start', marginRight:30, position:'absolute', bottom:10, width:'95%'}}>
          <TouchableOpacity onPress={()=>props.navigation.push('Profile1')}>
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
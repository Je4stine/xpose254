import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useContext } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../userContext';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';



const radio_props = [
  {label: 'Male', value:"Male"},
  {label: 'Female', value:"Female" }
];

const radio1_props = [
  {label: 'Male', value:"Male"},
  {label: 'Female', value:"Female" }
];
export default function Profile3(props) {

  const {userState, setUserState}=useContext(UserContext);

  const handleChangeText = (value, name)=>{
    setUserState({...userState, [name]:value});
  };

  const saveNewData = async ()=>{
    if (userState.value=== ""){
      alert("Please provide a name");
    }else{

      try{
        // await firebase.db.collection("profile").add({
        //   name:state.name,
        //   description:state.description,
        //   contacts: state.contacts
        // });
        props.navigation.navigate('Profile4');
        console.log(userState);
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
        <Text style={styles.profileText}>What is your gender? </Text>

          <View>
          <RadioForm
            radio_props={radio_props}
            initial={"Male"}
            formHorizontal={true}
            labelHorizontal={false}
            animation={true}
            buttonSize={15}
            onPress={(value)=> handleChangeText(value, "gender")}
          />
          </View>
        </View>

        <View style={{alignItems:'center', justifyContent:'center',}}> 
        <Text style={styles.profileText}>Which gender are you interested in? </Text>
        
        <View>
        <RadioForm
          radio_props={radio1_props}
          initial={"Male"}
          formHorizontal={true}
          labelHorizontal={false}
          animation={true}
          buttonSize={15}
          onPress={(value)=> handleChangeText(value, "interest")}
         />
        </View>
        </View>
        <View style={{alignItems:'center', justifyContent:'center'}}>  
        <Text style={styles.profileText}>How old are you?</Text>
        <TextInput
        style={styles.userNameInput}
        placeholder="Enter your age"
        keyboardType='numeric'
        onChangeText={(value)=> handleChangeText(value, "age")}
        />
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
          <TouchableOpacity onPress={()=>props.navigation.goBack('Profile2')}>
          <View style={{flexDirection:'row'}}> 
            <FontAwesome name="arrow-left" size={10} color="black" style={{ margin:5}}/>
            <Text style={{fontSize:20, marginLeft:5}}>Previous</Text>
          </View>
          </TouchableOpacity>
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
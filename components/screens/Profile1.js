import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native'
import React,{useState, useEffect, useContext} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import  ProfileContext from '../ProfileContext';


export default function Profile1(props) {
  // const initialState ={
  //   name: "",
  //   description: "",
  //   contacts: "",
  // };

  // const [state, setState] = useState(initialState);
  
  // const handleChangeText = (value, name)=>{
  //   setState({...state, [name]:value});
  // };

  const {userData, setUserData} =useContext(ProfileContext);


  // const saveNewData = async ()=>{
  //   if (state.name=== ""){
  //     alert("Please provide a name");
  //   }else{

  //     try{
  //       // await firebase.db.collection("profile").add({
  //       //   name:state.name,
  //       //   description:state.description,
  //       //   contacts: state.contacts
  //       // });

  //       console.log(state);
  //       props.navigation.navigate('Profile2');
  //     }catch(error){
  //       console.log(error)
  //     }
  //   }
  // };
  

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
        value={userData["name"]}
        onChangeText={(e)=> setUserData({...userData, "name": e.target.value})}
        />
        <View>
        <Text style={styles.profileText}>What do you expect from the Hookup?</Text>
        </View>
        <TextInput
        style={styles.userNameInput}
        placeholder="Write a description"
        value={userData["description"]}
        onChangeText={(e)=> setUserData({...userData, "description": e.target.value})}
        />
        <Text style={styles.profileText}> Your Contact info(Optional)</Text>
        <TextInput
        style={styles.userNameInput}
        placeholder="eg. Phone number"
        value={userData["contacts"]}
        onChangeText={(e)=> setUserData({...userData, "contacts": e.target.value})}
        />
        
    </View>
     
        <View style={{alignItems:'flex-end', marginRight:30, position:'absolute', bottom:10, width:'95%'}}>
          <TouchableOpacity onPress={()=>props.navigation.navigate('Profile2')}>
          <View style={{flexDirection:'row'}}> 
            <Text style={{fontSize:20, marginRight:5}}>Next</Text>
            <FontAwesome name="arrow-right" size={10} color="black" style={{ margin:5}}/>
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


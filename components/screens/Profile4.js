import React, { useState, useEffect, useContext } from 'react';
import { Image, View, Platform, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../userContext';


import firebaseConfig from '../../firebaseConfig';
import { initializeApp } from 'firebase/app'; 
import { getStorage,ref, uploadBytes } from 'firebase/storage';

initializeApp(firebaseConfig);




export default function Profile4(props) {

  const [image, setImage] = useState(null);
  const {userState, setUserState}=useContext(UserContext);
  // const ref= firebase.storage().ref('/profile/'+new(Date()).getTime());
  // // const [uploading, setUploading] = useState(false);
  // const [transferred, setTransferred] = useState(0);
  // // const Refs = collection(db, "profile");
  // const storage = getStorage();
  // const storageRef = ref(storage);
  


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 9],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      const storage = getStorage(); 
      const ref_con = ref(storage, new Date().toISOString()); 
      const img = await fetch(result.uri);
      const bytes = await img.blob();
      await uploadBytes(ref_con, bytes);
      // const upload = uploadBytes(ref, result.uri);
      // setUserState({...userState, image:result.uri});
    } else{
      alert("Please select an image");
    }
  };



  

 
  

  return (
    <>
    <View style={{alignSelf: 'center', flex:1}} >
       <View style={{alignItems:'center', justifyContent:'center', marginTop: '20%'}}>  
        <Text style={styles.profileText}>Add your sexiest photo</Text>
      </View>
      {image && <Image source={{ uri: image }} style={{ width: 300, height: 500, resizeMode:'contain' }} />}
      <TouchableOpacity onPress={pickImage}><View style={{backgroundColor:'blue', height:40, justifyContent:'center',alignItems:'center', borderRadius: 10, marginTop: 20}}><Text style={{color:'#fff', fontSize:13, fontWeight:'bold'}}> Choose from Libary </Text></View></TouchableOpacity>
    </View>
        <View style={{alignItems:'flex-start', marginRight:30, position:'absolute', bottom:10, width:'95%'}}>
          <TouchableOpacity onPress={()=>props.navigation.goBack('Profile3')}>
          <View style={{flexDirection:'row'}}> 
            <FontAwesome name="arrow-left" size={10} color="black" style={{ margin:5}}/>
            <Text style={{fontSize:20, marginLeft:5}}>Previous</Text>
          </View>
          </TouchableOpacity>
        </View>

        <View style={{alignItems:'flex-end', marginRight:30, position:'absolute', bottom:10, width:'95%'}}>
          <TouchableOpacity >
          <View style={{flexDirection:'row'}}> 
            <Text style={{fontSize:20, marginRight:5}}>Submit</Text>
          </View>
          </TouchableOpacity>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  profileText:{
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
  },
})
import React, { useState, useEffect, useContext } from 'react';
import { Image, View, Platform, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../userContext';
import firebaseConfig from '../../firebaseConfig';
// import { initializeApp } from 'firebase/app'; 
import { getDownloadURL, getStorage,ref, uploadBytes,set } from 'firebase/storage';
import {db} from '../../firebaseConfig';
import {collection,add,serverTimestamp, addDoc, Timestamp} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import firestore from '@react-native-firebase/firestore';

// initializeApp(firebaseConfig);


export default function Profile4(props) {

  const [image, setImage] = useState(null);
  const {userState, setUserState}=useContext(UserContext);
  const [imageUrl, setImageUrl] = useState();
  

  


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
      await getDownloadURL(ref_con).then(url => {
        setImageUrl(url);
        setUserState({...userState, image: url});
        
      })
      
    } else{
      alert("Please select an image");
    }
  };
  
  const saveNewData =async(e)=>{
      e.preventDefault()
      try {
        await addDoc(collection(db, 'user'), {
          name: userState.name,
          image: userState.image,
          description: userState.description,
          contacts: userState.contacts,
          city:userState.city,
          area:userState.area,
          hostStatus:userState.hostStatus,
          age:userState.age,
          gender:userState.gender,
          interest:userState.interest,
          created:Timestamp.now()
        })
        props.navigation.navigate('Home')
      } catch (err) {
        console.log(err)
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
          <TouchableOpacity onPress={saveNewData}>
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
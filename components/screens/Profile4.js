import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Profile4({navigation}) {
  const [image, setImage] = useState(null);

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
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
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
          <TouchableOpacity onPress={()=>navigation.push('Profile3')}>
          <View style={{flexDirection:'row'}}> 
            <FontAwesome name="arrow-left" size={10} color="black" style={{ margin:5}}/>
            <Text style={{fontSize:20, marginLeft:5}}>Previous</Text>
          </View>
          </TouchableOpacity>
        </View>

        <View style={{alignItems:'flex-end', marginRight:30, position:'absolute', bottom:10, width:'95%'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <View style={{flexDirection:'row'}}> 
            <Text style={{fontSize:20, marginRight:5}}>Submit</Text>
          </View>
          </TouchableOpacity>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  profileText:{
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
  },
})
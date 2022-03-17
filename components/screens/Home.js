import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput, ScrollView } from 'react-native';
import React,{useState, useContext, useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PostCard from '../PostCard';
import { BottomSheet } from 'react-native-btr';
import { UserContext } from '../userContext';
import { StatusBar } from 'expo-status-bar';
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import {db} from '../../firebaseConfig';


const Homepage = (props) => {
  const [visible, setVisible] = useState(false);
  const {userState, setUserState}=useContext(UserContext);
  const [posts, setPosts] = useState([]);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const q = query(collection(db, 'user'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])
  // const PostCard=({item}) => {
  //   return (
  //     <View style={{height: 200, width: 150, borderWidth:0.5, borderRadius:10, margin:15, borderColor:'grey'}}>
  //         <View>
  //           <Image source={{uri: item.image}} style={{ height:150, width:150, resizeMode:'contain', borderTopLeftRadius:30, borderTopRightRadius:30}}/>
  //         </View>
  //         <View style={{flexDirection: 'row',  display:'flex',justifyContent:'space-between', position:'absolute', top:10, width:'100%'}}>
  //               <Text style={{color:'red',marginLeft:5}}>{item.age}</Text>
  //                 <View style={{backgroundColor:'green', width:10, height:10,borderRadius:5, marginRight:5}}>
  //                 </View>
  //         </View>
  //         <View>
  //           <Text style={{fontSize:15, marginLeft:10}}>{item.name}</Text>
  //         </View>
  //         <View style={{flexDirection:'row', justifyContent:'space-between', padding:2}}>
  //           <Text style={{fontSize:18, fontWeight:'bold'}}> {item.city}</Text>
  //           <Text style={{fontSize:18, color:'red', marginRight:5}}>Locked</Text>
  //         </View>
  //     </View>
  //   )
  // }; 
  
  return (
    <>
    <View style={styles.container}>
    
         <View style={{height: 50, width:'100%', backgroundColor:'purple', justifyContent:'space-between',alignItems:'center', flexDirection: 'row', marginBottom:2}}>
            <Text style={{color:'#fff', fontSize:30, fontWeight:'bold', marginLeft:20}}>xpose254</Text>
            <View style={{flexDirection: 'row'}}> 

                <TouchableOpacity onPress={()=>props.navigation.navigate('User')}> 
                    <Image source={{uri: userState.image } || require('../../assets/user.png')} style={{height:40, width:40, margin:10, borderRadius:20}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate('ChatRoom')}>
                    <FontAwesome name="commenting" size={30} color="#fff" style={{margin:10}}/>
                </TouchableOpacity>
            </View>
        </View>
      <ScrollView >
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <TouchableOpacity onPress={toggleBottomNavigationView}>
          <PostCard/>
          </TouchableOpacity>
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
      {/* <FlatList
      data={setPost}
      renderItem={({item})=>{return<PostCard item={item}/>}}
      keyExtractor={(item, index)}/> */}
    </View>

    <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}>
          <View style={{
              margin: 2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#E0F7FA',
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              }}>
            <View style={{backgroundColor: '#fff',
              width: '100%',
              height: 250,
              justifyContent: 'center',
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              }}>
              <Text style={{fontSize:20, alignSelf:'center'}}>UNLOCK THIS PERSON</Text>
              <Text style={{fontSize:20, alignSelf:'center'}}>AND MAKE HOOK UP</Text>
              <Text style={{fontSize:20, alignSelf:'center'}}>ARRANGEMENTS</Text>
              <View style={{flexDirection: 'row',}}>
                <Image source={require("../../assets/mpesa1.png")} style={{height:50, width:50, marginRight:20, marginLeft:10}}/>
                <Text style={{fontSize:20, fontWeight:'bold', marginTop:10}}>Ksh 66</Text>
              </View>

              <View>
                <TextInput
                keyboardType='numeric'
                placeholder='Phone'
                style={{borderColor: 'black', borderBottomWidth: 1, margin: 10, width: '80%',alignSelf:'center'}}
                />
              </View>
              <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                <TouchableOpacity>
                <View style={{height:30, width:100, backgroundColor:'green', borderRadius:35}}>
                  <Text style={{color:'#fff', fontSize:15, fontWeight:'bold', textAlign:'center', marginTop:5}}>Submit</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={toggleBottomNavigationView}>
                <View style={{height:30, width:100, backgroundColor:'green', borderRadius:35,}}>
                  <Text style={{color:'#fff', fontSize:15, fontWeight:'bold', textAlign:'center', marginTop:5}}>Cancel</Text>
                </View>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </BottomSheet>

    </>
  )
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
  renderHeader: {
    backgroundColor:'#ffffff',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity:0.4,
    paddingTop:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  panelHeader: {
    alignItems:'center',
  },
  panelHandle:{
    width:40,
    height: 8,
    borderRadius:4,
    backgroundColor:'#00000040',
    marginBottom: 10,
  },
  sheetText:{
    alignItems:'center',
  }
});
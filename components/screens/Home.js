import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React,{useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PostCard from '../PostCard';
import { BottomSheet } from 'react-native-btr';




const Homepage = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
   
    setVisible(!visible);
  };
  
  return (
    <>
    <View style={styles.container}>
         <View style={{height: 50, width:'100%', backgroundColor:'black', justifyContent:'space-between',alignItems:'center', flexDirection: 'row', marginBottom:2}}>
            <Text style={{color:'red', fontSize:30, fontWeight:'bold', marginLeft:20}}>xpose254</Text>
            <View style={{flexDirection: 'row'}}> 

                <TouchableOpacity onPress={()=>navigation.navigate('User')}> 
                    <Image source={require('../../assets/user.png')} style={{height:35, width:35, margin:10}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('ChatRoom')}>
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
    </View>

    <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}>
          <View style={{height:20,
              margin: 2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#E0F7FA',
              borderRadius:30}}>
            <Text>Me</Text>
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
});
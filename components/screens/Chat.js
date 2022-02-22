import { StyleSheet, Text, View } from 'react-native';
import React,{useCallback, useState, useEffect} from 'react';

// import { GiftedChat} from 'react-native-gifted-chat';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import firebaseConfig from '../../firebaseConfig';
// // import * as firebase from 'firebase';
// import 'firebase/firestore';
// // import { } from 'firebase/<service>';


// const db = firebase.firestore();
// const Refs = db.collection('profile');

// const [message, setmessage] = useState([]);

// useEffect(() => {
//   const unsubscribe = Refs.onSnapshot(querySnapshot => {
//     const messagesFirestore = querySnapshot.docChanges().filter(({type}) => type === 'added').map(({doc})=>{
//       const messages = doc.data();
//       return {...messages, createdAt:messages.createdAt.toDate()}
//     }).sort((a,b)=>b.createdAt.getTime() - a.createdAt.getTime())
//     appendMessages(messagesFirestore);
//   });
//   return()=> unsubscribe()
// }, []);

// const appendMessages = useCallback((message)=> {
//   setmessage((previousMessage)=> GiftedChat.append(previousMessage, message))
// },[message]);

// async function handleSend (message){
//   const writes = message.map(m=>Refs.add(m));
//   await Promise.all(writes);
// };


export default function Chat() {
  return (
    <View><Text>Me</Text></View>
      // <GiftedChat
      // messages={message}
      // // user={}
      // onSend={()=>{handleSend}}
      // />
  )
};

const styles = StyleSheet.create({
    
});
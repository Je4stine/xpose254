import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { UserContext } from './userContext';
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';



export default function ChatItem(props) {
  const [chatMessages, setChatMessages] = useState([]);
  const db = getFirestore();
  const {userState, setUserState}=useContext(UserContext);

//   useEffect(() =>
//   onSnapshot(
//     query(
//       collection(db, `profile/${id}`, 'messages'),
//       orderBy('timestamp', 'desc')
//     ),
//     (snapshot) => {
//       setChatMessages(
//         snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
//       )
//     }
//   )
// );


  return (
    <ListItem onPress={() => enterChat(id, name)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri:
            chatMessages?.[0]?.photoURL ||
            'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: 800 }}>Jeff</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {/* {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message} */}
          I am here
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
};
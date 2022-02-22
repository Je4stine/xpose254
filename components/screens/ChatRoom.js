import { View, Text } from 'react-native';
import React from 'react';
import { Avatar,ListItem } from 'react-native-elements';

const ChatRoom = () => {

<Avatar
    size={64}
    rounded
  source={{uri: 'https://res.cloudinary.com/dro4xvvnh/image/upload/v1623696001/18744028b408f907a59e0b9229fc85ef-8_n6pv4q.jpg'}}
  />

  return (
    <View>
      <Text>ChatRoom</Text>
    </View>
  )
};

export default ChatRoom;
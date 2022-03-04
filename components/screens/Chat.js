import { View, Text } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello man, how are you doing',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Faith',
          avatar: 'https://res.cloudinary.com/dro4xvvnh/image/upload/v1623696001/18744028b408f907a59e0b9229fc85ef-8_n6pv4q.jpg',
        },
      },
    ])
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])


  return (
     <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
};
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';

import * as React from 'react';

import { RootTabScreenProps } from '../types';

import chatRoomData from '../assets/dummy-data/ChatRoom';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.page}>
      <FlatList 
        data={chatRoomData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false} 
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  },
});
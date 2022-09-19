import { Text, View, StyleSheet,Pressable , Image, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import { Auth } from 'aws-amplify';
import * as React from 'react';

import { RootTabScreenProps } from '../types';

import chatRoomData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const logOut = () => {
    Auth.signOut();
  }

  return (
    <View style={styles.page}>
      <FlatList 
        data={chatRoomData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false} 
      />
      {/* <Pressable onPress={logOut} style={{backgroundColor: 'red', height: 50, margin: 10, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Logout</Text>
      </Pressable> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  },
});
import React from 'react'
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import styles from '../UserItem/style';
import { useNavigation } from '@react-navigation/native';
import { DataStore, Auth } from 'aws-amplify';
import { ChatRoom, User, ChatRoomUser } from '../../src/models';

export default function UserItem({ user }) {

    const navigation = useNavigation();

    const onPress = async () => {

        // TODO if there is already a chat room between these 2 users.
        // then redirect to the existing chat room
        // otherwise, create a new chat room with these users.

        //Create a chat room
        const newChatRoom = await DataStore.save(new ChatRoom({newMessages: 0}));

        //connect authenticated user with chat room
        const authUser = await Auth.currentAuthenticatedUser();
        const dbUser = await DataStore.query(User, authUser.attributes.sub);
        await DataStore.save(new ChatRoomUser({
            user: dbUser,
            chatRoom: newChatRoom
        }))

        //connect clicked user with chat room
        await DataStore.save(new ChatRoomUser({
            user,
            chatRoom: newChatRoom
        }));

        navigation.navigate('ChatRoom', { id: newChatRoom.id });
        
    }

    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={{uri: user.imageUri}} style={styles.image} />

            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{user.name}</Text>
                </View>
            </View>
        </Pressable>
    );
}

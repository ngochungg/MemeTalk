import React from 'react'
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import styles from '../UserItem/style';
import { useNavigation } from '@react-navigation/native';

export default function UserItem({ user }) {

    const navigation = useNavigation();

    const onPress = () => {
        //Create a chat room
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

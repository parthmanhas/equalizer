import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProfileScreen = props => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile!</Text>
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default ProfileScreen;
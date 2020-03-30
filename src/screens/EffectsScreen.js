import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EffectsScreen = props => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Effects!</Text>
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default EffectsScreen;
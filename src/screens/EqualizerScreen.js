import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

const EqualizerScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.sliderAnddbTextParentContainer}>
                <View style={styles.dbTextContainer}>
                    <Text style={{ paddingHorizontal: 5}}>+15db</Text>
                    <Text style={{ paddingHorizontal: 5}}>+15db</Text>
                    <Text style={{ paddingHorizontal: 5}}>+15db</Text>
                    <Text style={{ paddingHorizontal: 5}}>+15db</Text>
                    <Text style={{ paddingHorizontal: 5}}>+15db</Text>
                </View>
                <View style={styles.sliderContainer}>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10
    },
    sliderContainer: {
        // flex: 0.5,
        // transform: [{ rotate: '90deg' }],
        width: 400,
        height: 300,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        marginVertical: 50
    },
    slider: {
        width: '90%',
        height: 50
    },
    dbTextContainer: {
        flexDirection: "row",
        backgroundColor: 'grey',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
        // transform: [{ rotate: '90deg' }]
    },
    sliderAnddbTextParentContainer:{
        flex : 1,
        backgroundColor: 'red',
        justifyContent: 'flex-end'
    }
});

export default EqualizerScreen;
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

const EqualizerScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.headerContent}>
                <View style={styles.headerStyle}>
                    <Text style={{ padding: 10 }}>Equaliser FX</Text>
                    <View style={styles.headerMenuButton}>
                        <Menu>
                            <MenuTrigger children={<Text style={{ fontSize: 25 }}>...</Text>} />
                            <MenuOptions>
                                <MenuOption onSelect={() => {}} text='Settings' />
                                <MenuOption onSelect={() => {}} text='Reset Profile' />
                            </MenuOptions>
                        </Menu>
                    </View>
                </View>
            </View>
            <View style={styles.sliderAnddbTextParentContainer}>
                <View style={styles.dbTextContainer}>
                    <Text style={{ paddingHorizontal: 5 }}>+15db</Text>
                    <Text style={{ paddingHorizontal: 5 }}>+15db</Text>
                    <Text style={{ paddingHorizontal: 5 }}>+15db</Text>
                    <Text style={{ paddingHorizontal: 5 }}>+15db</Text>
                    <Text style={{ paddingHorizontal: 5 }}>+15db</Text>
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
        transform: [{ rotate: '90deg' }],
        width: 400,
        height: 300,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow',
        marginVertical: 60
    },
    slider: {
        width: '90%',
        height: 50
    },
    dbTextContainer: {
        flexDirection: "row",
        // backgroundColor: 'grey',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
        // transform: [{ rotate: '90deg' }]
    },
    sliderAnddbTextParentContainer: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center',
        // backgroundColor: 'blue'
    },
    headerContent: {
        padding: 20,
        // backgroundColor: 'grey'
    },
    headerStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: 'yellow'
    },
    headerMenuButton: {
        transform: [{ rotate: '90deg' }],
    }
});

export default EqualizerScreen;
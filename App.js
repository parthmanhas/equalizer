import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EqualizerScreen from './src/screens/EqualizerScreen';
import EffectsScreen from './src/screens/EffectsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Equalizer" component={EqualizerScreen} />
        <Tab.Screen name="Effects" component={EffectsScreen} />
        <Tab.Screen name="Profiles" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

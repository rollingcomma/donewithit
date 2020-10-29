import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

const RootStack = createStackNavigator();
  
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="ImageView">
        <RootStack.Screen name="Home" component={WelcomeScreen} />
        <RootStack.Screen name="ImageView" component={ViewImageScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

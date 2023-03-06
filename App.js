import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 


import FirstScreen from './screens/FirstScreen'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import RegisterScreen from './screens/RegisterScreen';
import RequestsScreen from './screens/RequestsScreen';
import MapScreen from './screens/MapScreen';


export default function App()  {

    return (
     
        <Appcontainer />
     
    )
  }


const switchContainer = createSwitchNavigator({
  FirstScreen:FirstScreen,
  LoginScreen:LoginScreen,
  HomeScreen:HomeScreen,
  MainScreen : MainScreen,
  RegisterScreen:RegisterScreen,
  RequestsScreen:RequestsScreen,
  MapScreen:MapScreen,

  
})
const Appcontainer = createAppContainer(switchContainer)


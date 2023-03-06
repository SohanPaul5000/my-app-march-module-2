import React from 'react'
import {View, Text} from 'react-native'
import DrawerNavigator from '../components/DrawerNavigator'
import FirstScreen from './FirstScreen'
import {NavigationContainer} from '@react-navigation/native'
export default function HomeScreen()  {
  {
    return(
     <NavigationContainer> 
      <DrawerNavigator />
      </NavigationContainer>
    )
  }
}


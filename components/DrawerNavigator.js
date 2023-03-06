import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstScreen from '../screens/FirstScreen';
import MainScreen from '../screens/MainScreen';
import RequestsScreen from '../screens/RequestsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="First" component={FirstScreen} />
      
     
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

import React from 'react'
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native'
import DrawerNavigator from '../components/DrawerNavigator'
import {NavigationContainer} from '@react-navigation/native'
export default class FirstScreen extends React.Component {
  render(){
    return(
      <View>
      <View>
      <TouchableOpacity style={styles.button} >
      <Text> Start </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} >
      <Text> Stop </Text>
      </TouchableOpacity>
      <View>
      <TouchableOpacity style={styles.map} onPress={()=>this.props.navigation.navigate('MapScreen')}>
      <Text> MAP </Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  button : {
    marginTop:150,
    alignSelf:'center',
    borderWidth:3,
    marginLeft:100,
    width:80,
    height:30,
    textAlign:'center'
  },

  button2 : {
    marginTop:10,
    alignSelf:'center',
    borderWidth:3,
    marginLeft:100,
    width:80,
    height:30,
    textAlign:'center'
  },

  map : {
    borderWidth:2,
    marginTop:30
  }
})
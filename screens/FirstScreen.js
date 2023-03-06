import React from 'react'
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native'
export default class FirstScreen extends React.Component {
  render(){
    return(
      <View>
      <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('LoginScreen')} >
      <Text> Login </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={()=>this.props.navigation.navigate('RegisterScreen')} >
      <Text> Register </Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  button : {
    marginTop:245,
    alignSelf:'center',
    borderWidth:3
  },

  button2 : {
    marginTop:10,
    alignSelf:'center',
    borderWidth:3
  }
})
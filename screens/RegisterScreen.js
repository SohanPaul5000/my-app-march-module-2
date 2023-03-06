import React from 'react'
import {View, Text, TouchableOpacity, Button, StyleSheet, TextInput} from 'react-native'
export default class RegisterScreen extends React.Component {
  render(){
    return(
      <View>
      <TextInput style={styles.enter} placeholder="Email/Phone number" />
      <TextInput style={styles.enter2}  placeholder="Password" />
      <TextInput style={styles.enter3}  placeholder="Re-type Password" />
      <TouchableOpacity style={styles.button3} onPress={()=>this.props.navigation.navigate('LoginScreen')} >
      <Text> Submit </Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  enter : {
    
    borderWidth : 2,
    marginTop : 245,
    justifyContent:'center',
    textAlign:'center'
  },
  
  enter2 : {
    
    borderWidth : 2,
    marginTop : 5,
    justifyContent:'center',
    textAlign:'center'
  },

  button3 : {
    borderWidth:2,
    marginTop:300,
    alignSelf:'center'
  },
 
  enter3 : {
    
    borderWidth : 2,
    marginTop : 5,
    justifyContent:'center',
    textAlign:'center'
  },  
})
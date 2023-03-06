import React from 'react'
import {View, Text, TouchableOpacity, Button, StyleSheet, TextInput, Alert} from 'react-native'
import firebase from 'firebase'
import db from '../config'
export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("MainScreen");
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  render(){
    const{email,password}=this.state
    return(
      <View>
      <TextInput
              style={styles.enter}
              onChangeText={text => this.setState({ email: text })}
              placeholder={"Enter Email"}
              placeholderTextColor={"#FFFFFF"}
              autoFocus
            />
            <TextInput
              style={[styles.enter2, { marginTop: 20 }]}
              onChangeText={text => this.setState({ password: text })}
              placeholder={"Enter Password"}
              placeholderTextColor={"#FFFFFF"}
              secureTextEntry
            />
            <TouchableOpacity
              style={[styles.button3, { marginTop: 20 }]}
              onPress={() => this.handleLogin(email, password)}
            >
              <Text style={styles.buttonText}>Login</Text>
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

  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    //fontFamily: "Rajdhani_600SemiBold"
  }  
})
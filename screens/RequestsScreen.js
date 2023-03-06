import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
export default class RequestsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      money: '',
      address: '',
      description: '',
    };
  }
  addrequests = () => {
    db.collection('requests').add({
      Name: this.state.name,
      Money: this.state.money,
      Address: this.state.address,
      Description: this.state.description,
    });
  };
  render() {
    return (
      <View>
        <TextInput
          style={styles.enter}
          placeholder="Name"
          onChangeText={(text) => this.setState({ name: text })}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TextInput
            style={styles.enter2}
            placeholder="Money"
            onChangeText={(text) => this.setState({ money: text })}
          />
          <TextInput
            style={styles.enter3}
            placeholder="Address."
            onChangeText={(text) => this.setState({ address: text })}
          />
        </View>
        <TextInput
          style={styles.enter4}
          placeholder="Description"
          multiline={true}
          numberOfLines={12}
          onChangeText={(text) => this.setState({ description: text })}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity style={styles.button3} onPress={this.addrequests}>
            <Text> Draft </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3}>
            <Text> Post </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  enter: {
    borderWidth: 2,
    marginTop: 70,
    justifyContent: 'center',
    textAlign: 'center',
  },

  enter2: {
    width: 100,
    borderWidth: 2,
    marginTop: 5,
    justifyContent: 'center',
    textAlign: 'center',
  },

  button3: {
    borderWidth: 2,
    marginTop: 25,
    alignSelf: 'center',
    height: 30,
    width: 50,
  },

  enter3: {
    borderWidth: 2,
    //marginTop : 245,
    justifyContent: 'center',
    textAlign: 'center',
    width: 150,
    height: 30,
    marginTop: 5,
  },

  enter4: {
    borderWidth: 2,
    marginTop: 45,
    //justifyContent:'center',
    textAlign: 'center',
    height: 250,
    width: 280,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

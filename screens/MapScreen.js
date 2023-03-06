import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View, Text } from 'react-native';
export default class MapScreen extends React.Component {
  render() {
    return (
      <View>
        
        <MapView
        provider={PROVIDER_GOOGLE}
        style={{width:'100%',height:'100%'}}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
           } }
           showsUserLocation
           
          />


         
        
      </View>
    );
  }
}

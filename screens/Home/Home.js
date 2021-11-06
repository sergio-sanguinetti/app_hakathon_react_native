import { StatusBar } from 'expo-status-bar';
import React ,{useEffect, useState} from 'react';
import { Alert, Dimensions, StyleSheet, Text, View, Platform } from 'react-native';
import MapView , {Marker} from "react-native-maps";
import * as Location from "expo-location";
import Constants from "expo-constants";
import { Button } from 'react-native-elements/dist/buttons/Button';
import BasicButton from '../../components/BasicButton';

export default function HomeScreen() {

    const [location, setLocation] = useState({});
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          setErrorMsg(
            'Error!'
          );
          return;
        }
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('La app necesita los permisos para funcionar');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let text = 'Esperando';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  

  
  return (
    <View style={styles.container}>
       <MapView style={styles.map}>
          {location.coords ? <Marker
                 coordinate={location.coords}
                 title="Titulo"
                 descripcion="Descripcion del punto"/>
               : null
           }
       </MapView>
       <BasicButton
         style={{ padding:40}}
         title="MANDAR ALERTA"
         onPress={() => alert(text)}
         color="#CB4335"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  map:{
     width: '94%',
     height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

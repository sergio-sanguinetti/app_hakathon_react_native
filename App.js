import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


// SCREENS
import LoginScreen from './screens/Login/Login';
import SignUpScreen from './screens/SignUp/SignUp';
import ConfirmScreen from './screens/Confirm/Confirm';
import HomeScreen from './screens/Home/Home';
import ContactScreen from './screens/Contacts/Contacts';


function SettingsScreen({ route, navigation }) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>userParam: {JSON.stringify(user)}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Inicio</Text>
    </View>
  );
}



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {


  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >    
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="SingUp" component={SignUpScreen} />
        <Drawer.Screen name="Confirm" component={ConfirmScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Contacts" component={ContactScreen} />
        <Drawer.Screen name="Root" component={Root} />
     
    
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

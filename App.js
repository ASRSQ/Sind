import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import {css} from './assets/css/css'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login,Page} from './view'


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options ={{headerShown:false}} component={Home} />
      <Stack.Screen name="Login" options ={{headerShown:false}} component={Login} />
      <Stack.Screen name="Page" options ={{headerShown:false}} component={Page} />
    </Stack.Navigator>
    </NavigationContainer>

  );
}



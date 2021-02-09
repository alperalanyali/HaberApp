import{NavigationContainer, StackNavigator}  from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import Details from'./Components/Details';
import Home from './Components/Home';
import Login from './Components/Login';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Main(){
  return(
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerShown:false}}>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Details' component={Details}/>
        </Stack.Navigator>

    </NavigationContainer>
  );
}

export default Main;
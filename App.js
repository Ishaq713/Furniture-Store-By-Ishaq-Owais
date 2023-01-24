/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler';
import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Track from './Components/Track';
import MainScreen from './Components/MainScreen';
import SettingsScreen from './Components/Setting';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DrinksMenuScreen from './app/screens/DrinksMenuScreen';
const TabScreens = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#0F172A',
          alignItems: 'center',
          justifyContent: 'center',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="Home"
        color='black'
        component={Home}
        options={{

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={'black'} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Couch"
        component={Track}
        options={{

          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="couch" color={'black'} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="All Products"
        component={ChairMenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="chair" color={'black'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-cart" color={'black'} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const Ascreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0F172A',
          alignItems: 'center',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="ChairSection" component={ChairSection} />
      <Stack.Screen name="OrderedItemSection" component={OrderedItemSection} />
      <Stack.Screen name="TableSection" component={TableSection} />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Signup} />
        <Stack.Screen name="drawer" component={TabScreens} />
        <Stack.Screen name="Screens" component={Ascreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

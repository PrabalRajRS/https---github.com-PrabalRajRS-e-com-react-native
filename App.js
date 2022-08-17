/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {Dimensions, StatusBar, StyleSheet} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import BottomNavBar from './components/BottomNavbar';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Geolocation from '@react-native-community/geolocation';

Geolocation.getCurrentPosition(info => console.log(info));

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FF8A22" />
      <Navbar />
      <BottomNavBar />
    </NavigationContainer>
  );
};

export default App;

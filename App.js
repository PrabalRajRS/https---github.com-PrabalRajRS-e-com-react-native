/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {StatusBar} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavBar from './components/BottomNavbar';
import ViewOffers from './screens/ViewOffers';
import MyTeam from './screens/MyTeam';
import LaunchScreen from './screens/LaunchScreen';

Geolocation.getCurrentPosition(info => console.log(info));

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FF8A22" />
      <Stack.Navigator>
        <Stack.Screen
          name="LaunchScreen"
          component={LaunchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomNavbar"
          component={BottomNavBar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViewOffers"
          component={ViewOffers}
          options={({navigation}) => ({
            contentStyle: {backgroundColor: '#EEECEC'},
            title: 'View Offers',
            headerStyle: {backgroundColor: '#FF7214'},
            headerTitleStyle: {color: 'white'},
            headerLeft: () => (
              <Icon
                name="ios-arrow-back"
                onPress={() => navigation.goBack()}
                size={30}
                color="white"
              />
            ),
            headerRight: () => (
              <Icon name="help-circle-outline" size={30} color="white" />
            ),
          })}
        />
        <Stack.Screen
          name="MyTeam"
          component={MyTeam}
          options={({navigation}) => ({
            contentStyle: {backgroundColor: '#EEECEC'},
            title: 'My Team',
            headerStyle: {backgroundColor: '#FF7214'},
            headerTitleStyle: {color: 'white'},
            headerLeft: () => (
              <Icon
                name="ios-arrow-back"
                onPress={() => navigation.goBack()}
                size={30}
                color="white"
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

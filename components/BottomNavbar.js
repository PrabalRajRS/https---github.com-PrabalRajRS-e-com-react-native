import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Store from '../screens/Store';
import ViewOffers from '../screens/ViewOffers';

const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" size={30} color="#f4511e" />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="ViewOffers"
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" size={30} color="#f4511e" />
          ),
        }}
        component={ViewOffers}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="cart-outline" size={30} color="#f4511e" />
          ),
        }}
      />
      <Tab.Screen
        name="Z Wallet"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: ({color, size}) => (
            <Icon name="wallet-outline" size={30} color="#f4511e" />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="paper-plane-outline" size={30} color="#f4511e" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavBar;

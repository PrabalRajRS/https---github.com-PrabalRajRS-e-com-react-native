import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import History from '../screens/History';
import Home from '../Tabs/Home';
import Store from '../Tabs/Store';

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
        component={History}
        options={({navigation})=>({
          contentStyle: {backgroundColor: '#EEECEC'},
            title: 'History',
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
          tabBarIcon: ({color, size}) => (
            <Icon name="paper-plane-outline" size={30} color="#f4511e" />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomNavBar;

import React, {useEffect, useState} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';

const LaunchScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('BottomNavbar'), 3000);
  }, []);
  return (
    <View>
      <StatusBar backgroundColor="black" />
      <Image
        style={styles.image}
        source={require('../assests/images/launch_screen.png')}
      />
    </View>
  );
};

export default LaunchScreen;

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
});

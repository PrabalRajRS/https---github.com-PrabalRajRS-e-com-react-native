import React from 'react';
import {
  Dimensions, Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Offers from '../components/Offers';
import Stores from '../components/Stores';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Store = (props) => {
  return (
    <ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <Image
          resizeMode="contain"
          style={styles.map}
          source={require('../assests/images/map.png')}
        />
        <Offers title="Store Category" />
        <Text style={{fontSize: 18, fontWeight: '800', marginLeft:10}}>Stores Near You</Text>
        <Stores />
      </View>
    </ScrollView>
  );
};

export default Store;

const styles = StyleSheet.create({
  map: {
    width: SCREEN_WIDTH,
    height: 230,
  },
});

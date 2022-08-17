import {style} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.profile}
        source={require('../assests/images/profile.webp')}
      />
      <View style={styles.locationContainer}>
        <Text style={styles.location}>Location</Text>
        <Text style={{color: 'white'}}>Mumbai, India</Text>
      </View>
      <View style={styles.headerIcon}>
        <Icon style={styles.icon} name="search-sharp" size={40} color="white" />
        <Icon
          style={styles.icon}
          name="barcode-sharp"
          size={40}
          color="white"
        />
        <Icon
          style={styles.icon}
          name="notifications-sharp"
          size={40}
          color="white"
        />
        <Icon
          style={styles.icon}
          name="help-circle-outline"
          size={40}
          color="white"
        />
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  header: {
    height: 60,
    alignItems: 'center',
    backgroundColor: '#FF7214',
    display: 'flex',
    flexDirection: 'row',
  },
  profile: {
    width: 40,
    height: 40,
    marginLeft: 4,
  },
  locationContainer: {
    color: 'white',
    width: 150,
    display: 'flex',
    marginLeft: 10,
  },
  location: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: '700',
    color: 'white',
  },
  headerIcon: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 2,
  },
});

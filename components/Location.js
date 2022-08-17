// 'use strict';

// import React from 'react';
// import {StyleSheet, Text, View, Alert} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

// export default class Location extends React.Component {
//   state = {
//     initialPosition: 'unknown',
//     lastPosition: 'unknown',
//   };

//   watchID = null;

//   componentDidMount() {
//     Geolocation.getCurrentPosition(
//       position => {
//         const initialPosition = JSON.stringify(position);
//         this.setState({initialPosition});
//       },
//       error => Alert.alert('Error', JSON.stringify(error)),
//       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
//     );
//     this.watchID = Geolocation.watchPosition(position => {
//       const lastPosition = JSON.stringify(position);
//       this.setState({lastPosition});
//       console.log(lastPosition);
//     });
//     fetch(
//       'https://maps.googleapis.com/maps/api/geocode/json?address=' +
//       this.state.initialPosition.latitude +
//         ',' +
//         this.state.initialPosition.longitude +
//         '&key=' +
//         "AIzaSyDmI7g91HicpqFC2MVCeJp9VQ275tQp2Xg",
//     )
//       .then(response => response.json())
//       .then(responseJson => {
//         console.log(
//           'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
//         );
//       });
//   }

//   componentWillUnmount() {
//     this.watchID != null && Geolocation.clearWatch(this.watchID);
//   }

//   render() {
//     return (
//       <View>
//         <Text>
//           <Text style={styles.title}>Initial position: </Text>
//           {this.state.initialPosition}
//         </Text>
//         <Text>
//           <Text style={styles.title}>Current position: </Text>
//           {this.state.lastPosition}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   title: {
//     fontWeight: '500',
//   },
// });

import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    image: require('../assests/images/profile.jpg'),
    name: 'John Store',
    typeOne: 'Paid to',
    typeTwo: 'Debited from',
    amount: 500,
  },
  {
    image: require('../assests/images/profile.jpg'),
    name: 'Grocery Shop',
    typeOne: 'Received from',
    typeTwo: 'Credited to',
    amount: 10000,
  },
  {
    image: require('../assests/images/profile.jpg'),
    name: 'George Store',
    typeOne: 'Paid to',
    typeTwo: 'Debited from',
    amount: 500,
  },
  {
    image: require('../assests/images/profile.jpg'),
    name: 'George Store',
    typeOne: 'Received from',
    typeTwo: 'Credited to',
    amount: 500,
  },
  {
    image: require('../assests/images/profile.jpg'),
    name: 'George Store',
    typeOne: 'Paid to',
    typeTwo: 'Debited from',
    amount: 500,
  },
  {
    image: require('../assests/images/profile.jpg'),
    name: 'George Store',
    typeOne: 'Received from',
    typeTwo: 'Credited to',
    amount: 500,
  },
];

const History = () => {
  return (
    <ScrollView style={{backgroundColor:"white"}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Image style={styles.image} source={item.image} />
            <View style={styles.details}>
              <View style={styles.leftside}>
                <Text style={{fontWeight: '700', fontSize: 17}}>
                  {item.typeOne}
                </Text>
                <Text style={{fontWeight: '500', fontSize: 13}}>
                  {item.name}
                </Text>
              </View>
              <View style={styles.center}>
                {item.typeOne === 'Paid to' ? (
                  <Icon color="#f4511e" size={18} name="ios-arrow-forward" />
                ) : (
                  <Icon color="#f4511e" size={18} name="ios-arrow-back" />
                )}
              </View>
              <View style={styles.rightSide}>
                <Text
                  style={
                    item.typeOne === 'Paid to'
                      ? {
                          fontWeight: '700',
                          textAlign: 'right',
                          fontSize: 16,
                          color: 'red',
                        }
                      : {
                          fontWeight: '700',
                          textAlign: 'right',
                          fontSize: 16,
                          color: 'green',
                        }
                  }>
                  ₹ {item.amount}
                </Text>
                <Text style={{fontSize: 12, textAlign: 'right'}}>
                  {item.typeTwo}
                  {'  '}
                  <Icon color="#f4511e" size={15} name="md-wallet" />
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: '#f4511e',
    borderWidth: 2,
    margin: 15,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: '100%',
  },
  center: {
    width: 60,
    paddingLeft: 20,
  },
  leftside: {
    display: 'flex',
    width: 120,
  },
  rightSide: {
    display: 'flex',
    textAlign: 'right',
    width: 100,
  },
});

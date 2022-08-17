import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';

const data = [
  {
    name: 'Madhubani Boutique',
    type: 'Garments & Shopping',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4sLnHzscCIhWrQT2uH3bEJG3XuQcLMYDrQ&usqp=CAU',
    offer: 10,
    distance: 10,
    status: 'open',
    rating: 5.0,
  },
  {
    name: 'Dutt Grocery & Sons',
    type: 'Daily Needs',
    image:
      'https://thumbs.dreamstime.com/b/grocery-groceries-symbol-as-supermarket-shopping-cart-milk-eggs-cheese-meat-bread-fish-vegetables-fruit-as-icon-134030070.jpg',
    offer: 3,
    distance: 3,
    status: 'close',
    rating: 4.0,
  },
  {
    name: 'Dutt Jewel & Sons',
    type: 'Garments & Shopping',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzmJ4oyCGn_opYJuh5m4RDJ1pNKJvmj0Z8w&usqp=CAU',
    offer: 2,
    distance: 25,
    status: 'open',
    rating: 5.0,
  },
  {
    name: 'Madhubani Collections',
    type: 'Daily Needs',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rnjzx4sguedcnpsoo9f2',
    offer: 5,
    distance: 6,
    status: 'close',
    rating: 4.0,
  },
];

const Stores = () => {
  const renderItems = ({item}) => (
    <View style={styles.store}>
      <View>
        <Image style={styles.image} source={{uri: item.image}} />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.offer}>
          Flat {item.offer}% cashback on Purchase anything
        </Text>
        <Text style={styles.distance}>{item.distance} Metres</Text>
      </View>
      <View style={styles.rating}>
        <Text
          style={item.status === 'close' ? {color: 'red'} : {color: 'green'}}>
          {item.status}
        </Text>
        <Rating
          readonly
          type="custom"
          ratingBackgroundColor="grey"
          ratingCount={5}
          startingValue={item.rating}
          imageSize={13}
          style={{paddingVertical: 10}}
        />
        <Text style={styles.ratingCount}>{item.rating}</Text>
      </View>
    </View>
  );
  return <FlatList data={data} renderItem={renderItems} />;
};

export default Stores;

const styles = StyleSheet.create({
  store: {
    display: 'flex',
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEECEC',
    borderRadius: 40,
  },
  details: {
    marginLeft: 8,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
  },
  image: {
    height: 66,
    width: 66,
    borderRadius: 60,
    marginLeft: 5,
  },
  rating: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  ratingCount: {
    fontWeight: '700',
    marginTop:-5,
  },
  type: {
    fontSize: 11,
    color: 'grey',
    fontWeight: '600',
  },
  offer: {
    fontSize: 11,
  },
  distance: {
    fontSize: 10,
    color: 'grey',
    fontWeight: '700',
  },
});

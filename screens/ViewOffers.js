import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const data = [
  {
    name: 'Beauty Parlour',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4sLnHzscCIhWrQT2uH3bEJG3XuQcLMYDrQ&usqp=CAU',
    offer: 10,
  },
  {
    name: 'Beauty Parlour',
    image:
      'https://thumbs.dreamstime.com/b/grocery-groceries-symbol-as-supermarket-shopping-cart-milk-eggs-cheese-meat-bread-fish-vegetables-fruit-as-icon-134030070.jpg',
    offer: 3,
  },
  {
    name: 'Electrician Service',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzmJ4oyCGn_opYJuh5m4RDJ1pNKJvmj0Z8w&usqp=CAU',
    offer: 25,
  },
  {
    name: 'Electrician Service',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rnjzx4sguedcnpsoo9f2',
    offer: 6,
  },
];

const ViewOffers = () => {
  const renderItems = ({item}) => (
    <View style={styles.store}>
      <View>
        <Image style={styles.image} source={{uri: item.image}} />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.offer}>Get upto {item.offer}% Cashback</Text>
      </View>
    </View>
  );
  return <FlatList data={data} renderItem={renderItems} />;
};

export default ViewOffers;

const styles = StyleSheet.create({
  store: {
    display: 'flex',
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
  },
  details: {
    marginLeft: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  image: {
    height: 66,
    width: 66,
    borderRadius: 60,
    marginLeft: 5,
  },
  offer: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#FF7214',
    fontWeight: '800',
  },
});

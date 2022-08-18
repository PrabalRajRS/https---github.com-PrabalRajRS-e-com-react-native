import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    categoryOne: 'Pay to',
    categoryTwo: 'User',
    icon: 'information-circle-sharp',
  },
  {
    categoryOne: 'Pay to',
    categoryTwo: 'Merchant',
    icon: 'list-circle',
  },
  {
    categoryOne: 'To Bank',
    categoryTwo: 'Account',
    icon: 'people-circle',
  },
  {
    categoryOne: 'Loan',
    categoryTwo: 'Document',
    icon: 'heart-circle',
  },
];

const Categories = ({categoryData, navigation}) => {
  return (
    <View style={styles.categories}>
      {categoryData
        ? categoryData.map(item => (
            <TouchableHighlight underlayColor={"white"}
              onPress={() => navigation.navigate(item.navigate)}>
              <View style={styles.category}>
                <Icon name={item.icon} size={43} color="#FF7214" />
                <Text style={styles.name1}>{item.categoryOne}</Text>
                <Text style={styles.name}>{item.categoryTwo}</Text>
              </View>
            </TouchableHighlight>
          ))
        : data.map(item => (
            <View style={styles.category}>
              <Icon name={item.icon} size={43} color="#FF7214" />
              <Text style={styles.name1}>{item.categoryOne}</Text>
              <Text style={styles.name}>{item.categoryTwo}</Text>
            </View>
          ))}
    </View>
  );
};
export default Categories;

const styles = StyleSheet.create({
  categories: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#E8E5E5',
    justifyContent: 'space-around',
  },
  category: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 7,
  },
  name1: {
    fontSize: 12,
    fontWeight: '500',
  },
  name: {
    fontSize: 14,
    fontWeight: '800',
  },
});

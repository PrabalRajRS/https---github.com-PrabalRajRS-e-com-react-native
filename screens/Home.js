import React from 'react';
import {ScrollView, View} from 'react-native';
import Carousal from '../components/Carousal';
import Categories from '../components/Categories';
import Offers from '../components/Offers';
import Brands from '../components/Brands';
import Location from '../components/Location';

const categoryData = [
  {
    categoryOne: 'View All',
    categoryTwo: 'Offers',
    icon: 'information-circle-sharp',
    navigate:'ViewOffers'
  },
  {
    categoryOne: 'View My',
    categoryTwo: 'Points',
    icon: 'list-circle',
  },
  {
    categoryOne: 'My All',
    categoryTwo: 'Team',
    icon: 'people-circle',
  },
  {
    categoryOne: 'Refer &',
    categoryTwo: 'Income',
    icon: 'heart-circle',
  },
];

const Home = () => {
  return (
    <ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <Carousal />
        <Categories />
        <Offers title="Offers" />
        {/* <Location /> */}
        <Brands />
        <Categories categoryData={categoryData} />
        <Carousal />
      </View>
    </ScrollView>
  );
};

export default Home;

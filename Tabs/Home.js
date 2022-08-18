import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import Carousal from '../components/Carousal';
import Categories from '../components/Categories';
import Offers from '../components/Offers';
import Brands from '../components/Brands';
import Location from '../components/Location';
import Navbar from '../components/Navbar';
import BottomNavBar from '../components/BottomNavbar';

const categoryData = [
  {
    categoryOne: 'View All',
    categoryTwo: 'Offers',
    icon: 'information-circle-sharp',
    navigate: 'ViewOffers',
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
    navigate: 'MyTeam',
  },
  {
    categoryOne: 'Refer &',
    categoryTwo: 'Income',
    icon: 'heart-circle',
  },
];
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Home = ({navigation}) => {
  return (
    <View>
      <Navbar />
      <ScrollView style={{height: SCREEN_HEIGHT - 112}}>
        <View style={{backgroundColor: 'white'}}>
          <Carousal />
          <Categories />
          <Offers title="Offers" />
          {/* <Location /> */}
          <Brands />
          <Categories categoryData={categoryData} navigation={navigation} />
          <Carousal />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

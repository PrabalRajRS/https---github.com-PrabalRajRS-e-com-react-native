import React, {useRef, useState} from 'react';
import {Image, StyleSheet, Text, Dimensions, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const data = [
  require('../assests/images/bannerTwo.webp'),
  require('../assests/images/bannerOne.jpg'),
  require('../assests/images/bannerThree.jpg'),
  require('../assests/images/bannerFour.jpg'),
];

const SCREEN_WIDTH = Dimensions.get('window').width;

const renderItem = ({item, index}) => {
  return <Image source={item} style={styles.img} />;
};

const Carousal = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  return (
    <View>
      <Carousel
        ref={ref}
        style={styles.slide}
        onSnapToItem={i => setActiveTab(i)}
        data={data}
        renderItem={renderItem}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH}
        slideStyle={{width: SCREEN_WIDTH}}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
      <View style={styles.tabBar}>
        <Pagination
          containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
          dotStyle={styles.ww}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          activeDotIndex={activeTab}
        />
      </View>
    </View>
  );
};

export default Carousal;

const styles = StyleSheet.create({
  slide: {
    height: 8,
  },
  img: {
    height: 130,
    width: SCREEN_WIDTH - 20,
    margin: 10,
  },
  ww: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
});

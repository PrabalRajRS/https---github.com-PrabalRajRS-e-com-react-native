import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const data = [
  'https://media.istockphoto.com/photos/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-picture-id1193750118?b=1&k=20&m=1193750118&s=170667a&w=0&h=dWmXq8D_P7sHRIZn-fPNRLPJaAvSvJmeYH9Bsq8Ywhs=',
  'https://voilastudio.in/images/VMM11/2520.webp',
  'https://m.media-amazon.com/images/I/71SvV17lq-L._SX425_.jpg',
  'https://i.dell.com/is/image/DellContent/content/dam/images/products/desktops-and-all-in-ones/inspiron/24-5415-non-touch/in24-5415-km5221w-csy-00000ff090-gy-fbcspk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=541&qlt=100,0&resMode=sharp2&size=541,402',
  'https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg',
];
const SCREEN_WIDTH = Dimensions.get('window').width;

const Brands = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: '900', fontSize: 17}}>Our Brands</Text>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <View>
            <Image style={styles.img} source={{uri: item}} />
          </View>
        )}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={380}
        slideStyle={{width: 100}}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container:{
    padding:5
  },
  imgContainer: {
    padding: 10,
  },
  img: {
    borderRadius: 40,
    height: 80,
    width: 80,
  },
});

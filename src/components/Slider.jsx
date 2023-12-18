import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
} from 'react-native';
import NikeSvg from './media/svg/nike';
import { calcHeight, calcWidth } from '../../config';

const { width: screenWidth } = Dimensions.get('window');

const Slider = () => {
  const images = [
    require('./media/images/nike.png'),
    require('./media/images/nike.png'),
    require('./media/images/nike.png'),
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistRef = useRef();

  useEffect(() => {
    let interval = setInterval(() => {
      if (images.length > 1) {
        const nextIndex = (activeIndex + 1) % images.length;
        flatlistRef.current.scrollToIndex({ index: nextIndex, animated: true });
        setActiveIndex(nextIndex);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / 323);
    setActiveIndex(index);
  };

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: 323 * index,
    index: index,
  });

  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: calcWidth(300),
        height: 136,
        borderRadius: 20,
        alignSelf: 'center',
        overflow: 'hidden',
        position: 'absolute',
        marginTop: calcHeight(-72),
        zIndex: 3,
      }}
    >
      <FlatList
        data={images}
        getItemLayout={getItemLayout}
        ref={flatlistRef}
        renderItem={({ index }) => (
          <ImageBackground
            source={images[index]}
            style={{
              flex: 1,
              height: 138,
              width: 323,
              borderRadius: 10,
              resizeMode: 'cover',
            }}
          ></ImageBackground>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          position: 'absolute',
        }}
      >
        <NikeSvg />
        <Text style={{ fontWeight: 'bold' }}>Check Out Latest Offers</Text>
      </View>
    </View>
  );
};

export default Slider;

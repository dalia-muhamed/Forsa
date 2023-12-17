import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import SectorComponent from '../components/SectorComponent';
import KeySvg from '../components/media/svg/key';
import AlertSvg from '../components/media/svg/alert';
import WritetSvg from '../components/media/svg/writing';
import { EvilIcons } from '@expo/vector-icons';
import { calcHeightHome, calcHeightProfile } from '../../config';
import AdditionalLoans from '../components/AdditionalLoans';
import OffersCards from '../components/OffersCards';

const Home = () => {
  return (
    <ScrollView>
      <ImageBackground
        style={styles.clipPath}
        source={require('../components/media/images/Ellipse4xhome.png')}
      >
        <View style={styles.navIconContainer}>
          <EvilIcons name="search" size={24} color="white" />
          <KeySvg />
          <AlertSvg />
        </View>
        <View style={styles.writing}>
          <WritetSvg />
          <View>
            <Text style={styles.writingTxt}>Get limit limits</Text>
            <Text style={styles.writingTxt}>Get limit limits</Text>
          </View>
        </View>
      </ImageBackground>
      <SectorComponent />
      <AdditionalLoans />
      <OffersCards />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  conatiner: { flex: 1 },
  clipPath: {
    resizeMode: 'cover',
    width: '100%',
    height: calcHeightProfile(260),
  },
  navIconContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  writing: {
    borderWidth: 1,
    borderBlockColor: '#FFC709',
    flexDirection: 'row',
    width: 325,
    height: 52,
  },
  writingTxt: { color: '#FFC709' },
});
export default Home;

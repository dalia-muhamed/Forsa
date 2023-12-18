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
import HeartSvg from '../components/media/svg/heart';
import { EvilIcons } from '@expo/vector-icons';
import { calcHeight } from '../../config';
import AdditionalLoans from '../components/AdditionalLoans';
import OffersCards from '../components/OffersCards';
import Slider from '../components/Slider';
import { strings } from '../translations/localLanguagesController';

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
          <View style={styles.notifications}>
            <HeartSvg style={styles.favIcon} />
            <AlertSvg />
          </View>
        </View>
        <View>
          <View style={styles.writing}>
            <WritetSvg />
            <View>
              <Text style={styles.writingheading}>{strings('limit')}</Text>
              <Text style={styles.writingTxt}>
                Complete your infoand get up to EGP 100,000
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View>
        <ImageBackground
          source={require('../components/media/images/animation.png')}
          style={styles.backgroundIMG}
        >
          <Slider />
          <SectorComponent />
        </ImageBackground>
      </View>
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
    height: calcHeight(260),
  },
  navIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 45,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  notifications: { flexDirection: 'row', gap: 7 },
  writing: {
    borderWidth: 1,
    borderColor: '#FFC709',
    flexDirection: 'row',
    width: 325,
    height: 52,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15.11,
    borderRadius: 2,
    alignItems: 'center',
    marginHorizontal: 'auto',
    paddingVertical: 6,
    borderRadius: 11,
  },
  writingheading: { color: '#FFC709', fontSize: 18, textAlign: 'left' },
  writingTxt: { color: '#FFC709', fontWeight: '300', fontSize: 12 },
  backgroundIMG: {
    resizeMode: 'cover',
    width: '100%',
  },
});
export default Home;

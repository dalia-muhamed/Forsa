import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Share,
} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import HeartSvg from '../components/media/svg/heart';
import AlertSvg from '../components/media/svg/alert';
import DropdownSvg from '../components/media/svg/down-arrow';
import { TouchableOpacity } from 'react-native';
import { calcHeight, calcHeightProfile } from '../../config';

const Profile = () => {
  const onShare = async () => {
    try {
      await Share.share({
        message: 'Check out the latest offers!',
      });
    } catch (error) {
      console.error('Error sharing content:', error.message);
    }
  };
  return (
    <ScrollView
      style={styles.container}
      // bounces={false}
    >
      <ImageBackground
        style={styles.clipPath}
        source={require('../components/media/images/Ellipse4x.png')}
      >
        <View style={styles.headingContainer}>
          <Text style={styles.profileHeading}>Profile</Text>
          <View style={styles.navIconContainer}>
            <HeartSvg style={styles.favIcon} />
            <AlertSvg style={styles.alertIcon} />
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          gap: 30,
          marginLeft: 18,
          marginTop: 40,
        }}
      >
        <View>
          <Image source={require('../components/media/images/profile.png')} />
        </View>
        <Text style={styles.username}>Mohammed Adel</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onShare}>
          <Text style={styles.buttonTxt}>Share the app</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            gap: 94,
            marginTop: 14.71,
          }}
        >
          <TouchableOpacity>
            <Text style={styles.buttonTxt}>Change Language</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity>
              <Text style={styles.lang}>English</Text>
            </TouchableOpacity>
            <DropdownSvg style={styles.arrowSvg} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  clipPath: {
    resizeMode: 'cover',
    width: '100%',
    height: calcHeightProfile(130),
  },
  navIconContainer: {
    flexDirection: 'row',
    gap: 14.45,
    marginLeft: 67,
  },
  favIcon: { width: 25.82, height: 22.97 },
  alertIcon: { width: 22.68, height: 23 },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  profileHeading: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 29.05,
    color: 'white',
  },
  imgProfile: { width: 98, height: 82, borderRadius: 8 },
  username: {
    fontSize: 21,
    fontWeight: '400',
    lineHeight: 25,
    textAlign: 'center',
    marginTop: -5,
  },
  buttonsContainer: { marginLeft: 18, marginTop: 40 },
  buttonTxt: { fontSize: 18, fontWeight: '400' },
  lang: { fontWeight: '500' },
  arrowSvg: {
    marginLeft: 8,
    marginRight: 0.29,
    fontWeight: '500',
    width: 24,
    height: 24,
  },
});
export default Profile;

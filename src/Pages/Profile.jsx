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
import Svg, { Path, Rect, Defs, Pattern, Use, SvgUri } from 'react-native-svg';
import ClipPath from '../components/media/svg/elipse';
import HeartSvg from '../components/media/svg/heart';
import AlertSvg from '../components/media/svg/alert';
import DropdownSvg from '../components/media/svg/down-arrow';
import { TouchableOpacity } from 'react-native';

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
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground
          style={styles.clipPath}
          source={require('../components/media/images/Ellipse-profile.png')}
        >
          <View style={styles.navIconContainer}>
            <HeartSvg style={styles.favIcon} />
            <AlertSvg style={styles.alertIcon} />
          </View>
          <Text style={styles.profileHeading}>Profile</Text>
        </ImageBackground>
      </View>
      {/* <ClipPath style={styles.clipPath} /> */}

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          gap: 30,
          marginLeft: 20,
          marginTop: 30,
        }}
      >
        <View>
          <Image source={require('../components/media/images/profile.png')} />
        </View>
        <Text style={styles.username}>Mohammed Adel</Text>
      </View>
      <View style={{ marginLeft: 18, marginTop: 29.2 }}>
        <TouchableOpacity onPress={onShare}>
          <Text style={styles.buttonTxt}>Share the app</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity>
            <Text>Change Language</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity>
              <Text>English</Text>
            </TouchableOpacity>
            <DropdownSvg />
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
    height: 391,
    // aspectRatio: 1.7,
    alignItems: 'flex-end',
  },
  navIconContainer: {
    flexDirection: 'row',
    gap: 7,
    paddingTop: 50,
    paddingRight: 20,
  },
  favIcon: { width: 25.82, height: 22.97 },
  alertIcon: { width: 22.68, height: 23 },
  headingContainer: {
    width: 73,
    height: 29,
    top: 62,
    left: 153,
    justifyContent: 'center',
    alignItems: 'center',
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
  buttonTxt: { fontSize: 18, fontWeight: '400' },
});
export default Profile;

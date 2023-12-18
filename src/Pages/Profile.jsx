import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Share,
} from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import HeartSvg from '../components/media/svg/heart';
import AlertSvg from '../components/media/svg/alert';
import DropdownSvg from '../components/media/svg/down-arrow';
import { TouchableOpacity } from 'react-native';
import { calcHeight } from '../../config';
import { Picker } from '@react-native-picker/picker';
import {
  getAppLanguage,
  setAppLanguage,
} from '../translations/localLanguagesController';

const Profile = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(getAppLanguage());
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
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 14.71,
          }}
        >
          <TouchableOpacity>
            <Text style={styles.buttonTxt}>Change Language</Text>
          </TouchableOpacity>
          <Picker
            style={{
              height: 50,
              width: 150,
            }}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedLanguage(itemValue);
              console.log(itemValue);
              itemValue == 'en'
                ? setAppLanguage('en', true)
                : setAppLanguage('ar', true);
            }}
          >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Arabic" value="ar" />
          </Picker>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {/* <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Text style={styles.lang}>English</Text>
              <DropdownSvg style={styles.arrowSvg} />
            </TouchableOpacity> */}
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
    height: calcHeight(130),
  },
  navIconContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'flex-end',
  },
  favIcon: { width: 25.82, height: 22.97 },
  alertIcon: { width: 22.68, height: 23, marginLeft: 10 },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  profileHeading: {
    width: '50%',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 29.05,
    textAlign: 'right',
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
  buttonsContainer: { marginHorizontal: 18, marginTop: 40 },
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

import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import BackgroundEven from '../components/media/svg/loansBackground';
import BackgroundOdd from '../components/media/svg/backgroundOdd';
import { calcWidth } from '../../config';
import {
  getAppLanguage,
  strings,
} from '../translations/localLanguagesController';

const AdditionalLoans = () => {
  const [loans, setLoans] = useState([]);
  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const responseData = await axios.get(
          'https://forsa-staging.bit68.com/api/v1/onetransaction/myservicetypes/'
        );
        const data = responseData.data.results;
        setLoans(data);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchLoans();
  }, []);
  return (
    <View>
      <View style={styles.headingBox}>
        <Text style={styles.header}>{strings('request_loan')}</Text>
        <TouchableOpacity>
          <Text style={styles.seeLess}>{strings('see_less')}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {loans && (
          <FlatList
            numColumns={2}
            data={loans}
            renderItem={({ item, index }) => (
              <View style={[styles.loanSection, { marginHorizontal: 8 }]}>
                {index % 2 == 0 ? (
                  <BackgroundOdd style={styles.loanContainer}></BackgroundOdd>
                ) : (
                  <BackgroundEven style={styles.loanContainer}></BackgroundEven>
                )}
                <Text style={styles.loanLabel}>
                  {getAppLanguage() === 'ar' ? item.name_ar : item.name}
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  loanSection: {
    alignSelf: 'center',
  },
  loanContainer: {
    width: calcWidth(156.5),
    height: 56,
    paddingLeft: 26,
    marginBottom: 8,
    borderRadius: 10,
  },
  loanLabel: {
    color: 'white',
    lineHeight: 56,
    position: 'absolute',
    alignSelf: 'center',
  },
  headingBox: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 20,
  },
  header: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 23.94,
    color: '#072040',
  },
  seeLess: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 23.94,
    color: '#072040',
  },
});
export default AdditionalLoans;

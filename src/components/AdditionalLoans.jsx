import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import Background from '../components/media/svg/loansBackground';
import { calcWidth } from '../../config';

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
        console.log(error);
      }
    };
    fetchLoans();
  }, []);
  const randomGradients = [];
  return (
    <View>
      <View style={styles.headingBox}>
        <Text style={styles.header}>Request Additional Loan</Text>
        <TouchableOpacity>
          <Text style={styles.seeLess}>See Less</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {loans && (
          <FlatList
            numColumns={2}
            data={loans}
            renderItem={({ item }) => (
              <View style={[styles.loanSection, { marginLeft: 15 }]}>
                <View style={styles.loanContainer}>
                  <Text style={styles.loanLabel}>{item.name}</Text>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
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
    width: 156.5,
    height: 56,
    backgroundColor: 'blue',
    paddingLeft: 26,
    marginBottom: 8,
    borderRadius: 10,
  },
  loanLabel: {
    color: 'white',
    // textAlign: 'center',
    lineHeight: 56,
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
    LineHeight: 23.94,
    color: '#072040',
  },
});
export default AdditionalLoans;

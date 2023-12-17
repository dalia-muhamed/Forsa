import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdditionalLoans = () => {
  const [loans, setLoans] = useState([]);
  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const responseData = await axios.get(
          'https://forsa-staging.bit68.com/api/v1/onetransaction/myservicetypes/'
        );
        const data = responseData.data.results;
        console.log(data);
        setLoans(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLoans();
  }, []);
  return (
    <View>
      <View style={styles.headingBox}>
        <Text style={styles.header}>Request Additional Loan</Text>
        <Text style={styles.seeLess}>See Less</Text>
      </View>
      {loans && (
        <FlatList
          // horizontal
          snapToInterval={70}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          numColumns={2}
          data={loans}
          renderItem={({ item }) => (
            <>
              <View style={styles.loanSection}>
                <View style={styles.loanContainer}>
                  <Text style={styles.loanLabel}>{item.name}</Text>
                </View>
              </View>
            </>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  loanSection: { flexDirection: 'row' },
  loanContainer: {
    width: 156.5,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loanLabel: { textAlign: 'center' },
  headingBox: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  header: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 23.94,
    color: '#072040',
  },
  seeLess: {
    fontWeight: 400,
    fontSize: 18,
    LineHeight: 23.94,
    color: '#072040',
  },
});
export default AdditionalLoans;

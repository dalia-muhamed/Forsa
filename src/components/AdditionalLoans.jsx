import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdditionalLoans = () => {
  const [loans, setLoans] = useState([]);
  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const responseData = await axios.get(
          'https://forsa-staging.bit68.com/api/v1/stores/mysectors/'
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
      {loans && (
        <FlatList
          horizontal
          snapToInterval={70}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={loans}
          renderItem={({ item }) => (
            <View style={styles.loanContainer}>
              <Text>{item.label}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  loanContainer: {
    width: 156.5,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AdditionalLoans;

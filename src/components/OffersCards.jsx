import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import axios from 'axios';

const OffersCards = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const responseData = await axios.get(
          'https://forsa-staging.bit68.com/api/v1/stores/myoffers/'
        );
        const data = responseData.data.results;
        setOffers(data);
      } catch (error) {
        // console.log(error);
      }
    };

    fetchOffers();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={{ zIndex: 2, width: '100%' }}>
        {(item.brand.background || item.brand.background_web) && (
          <Image
            style={styles.image}
            source={{
              uri: item.brand.background || item.brand.background_web,
            }}
          />
        )}
      </View>
      {/* Additional content for each offer */}
      <View style={styles.fixedView}>
        <Text style={[styles.brandText, { color: 'gray' }]}>
          {item.brand.sector.title}
        </Text>
        <Text style={styles.brandText}>{item.brand.title}</Text>
        {/* Add more content as needed */}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Offers Selected For You</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <FlatList
        data={offers}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  boldText: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  seeAll: {
    fontWeight: '600',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    height: 150,
    borderRadius: 8,
    marginBottom: 5,
  },
  fixedView: {
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: -12,
    borderRadius: 8,
    backgroundColor: 'white',
    zIndex: 5,
    padding: 5,
  },
  brandText: {
    textAlign: 'center',
  },
});

export default OffersCards;

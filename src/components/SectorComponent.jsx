import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SectorComponent = () => {
  const [sectorData, setSectorData] = useState([]);
  const [sector, setSector] = useState('');
  const [brand, setBrand] = useState([]);
  const [page, setPage] = useState(1);
  const [id, setId] = useState();
  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const responseData = await axios.get(
          'https://forsa-staging.bit68.com/api/v1/stores/mysectors/'
        );
        const allItem = {
          value: '-1',
          label: 'All',
          slug: 'All',
        };
        const data = [allItem, ...responseData.data.results];
        setSectorData(data);
      } catch (error) {}
    };
    const AllBrands = async id => {
      try {
        const apiUrl =
          'https://forsa-staging.bit68.com/api/v1/stores/mystores/';
        const responseData =
          !id || id === -1
            ? await axios.get(`${apiUrl}?page=${page}`)
            : await axios.get(`${apiUrl}?sector=${id}&page=${page}`);

        const data = responseData.data.results;
        console.log(data);
        setBrand(data);
      } catch (error) {
        console.log(err);
      }
    };
    fetchSectors();
    AllBrands();
  }, []);
  const getPage = page => {
    page += 1;
    setPage(page);
  };
  const fetchBrand = async id => {
    try {
      const apiUrl = 'https://forsa-staging.bit68.com/api/v1/stores/mystores/';
      const responseData =
        !id || id === -1
          ? await axios.get(`${apiUrl}?page=${page}`)
          : await axios.get(`${apiUrl}?sector=${id}&page=${page}`);

      const data = responseData.data.results;
      setBrand(data);
    } catch (error) {
      console.log(error.response.status === 404);
      return [];
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./media/images/animation.png')}
        style={styles.backgroundIMG}
      ></ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.headerText}>Top Brands in retail</Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: 600 }}>View all</Text>
        </TouchableOpacity>
      </View>
      {/*Sectors */}

      {sectorData && (
        <FlatList
          style={styles.flat}
          horizontal
          snapToInterval={70}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={sectorData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setPage(1);
                setId(Number(item.value));
                fetchBrand(Number(item.value));
              }}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      {brand && (
        <FlatList
          style={styles.flat}
          horizontal
          snapToInterval={70}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          onEndReached={() => {
            getPage(page);
            fetchBrand(id);
          }}
          data={brand}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.button}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    paddingTop: 70,
  },
  backgroundIMG: {
    height: 160,
    width: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  headerText: {
    paddingLeft: 17,
    fontWeight: 'bold',
    fontSize: 20,
  },
  flat: {
    paddingHorizontal: 10,
    marginTop: 5,
    width: '95%',
  },
  button: {
    marginVertical: 8,
    marginHorizontal: 14,
  },
});
export default SectorComponent;

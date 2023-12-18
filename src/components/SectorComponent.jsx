import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { strings } from '../translations/localLanguagesController';

const SectorComponent = () => {
  const [sectorData, setSectorData] = useState([]);
  const [sector, setSector] = useState('');
  const [brand, setBrand] = useState([]);
  const [page, setPage] = useState(1);
  const [id, setId] = useState();
  const [activeBtn, setActiveBtn] = useState(0);

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
        // console.log('data:', data, 'page:', page);
        setBrand(data);
      } catch (error) {
        // console.log(err);
      }
    };
    fetchSectors();
    AllBrands();
  }, []);
  const fetchBrand = async (id, resetPage) => {
    try {
      const apiUrl = 'https://forsa-staging.bit68.com/api/v1/stores/mystores/';
      const pagination = resetPage ? 1 : page;
      const responseData =
        !id || id === -1
          ? await axios.get(`${apiUrl}?page=${pagination}`)
          : await axios.get(`${apiUrl}?sector=${id}&page=${pagination}`);

      const data = [...brand, ...responseData.data.results];
      setPage(page + 1);
      console.log(data, pagination);
      setBrand(data);
    } catch (error) {}
  };
  const handlePress = index => {
    setActiveBtn(index);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 25,
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Text style={styles.headerText}>{strings('brand_in_retail')}</Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: '600' }}>{strings('view_all')}</Text>
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
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.button,
                index === activeBtn && styles.pressedButton,
              ]}
              onPress={() => {
                handlePress(index, item.value);
                setId(Number(item.value));
                fetchBrand(Number(item.value), true);
              }}
            >
              <Text
                style={[
                  styles.buttonText,
                  (index === activeBtn ||
                    (index === 0 && activeBtn === null)) &&
                    styles.pressedButtonText,
                ]}
              >
                {item.label}
              </Text>
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
            fetchBrand(id);
          }}
          data={brand}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.button}>
              <Image
                style={{ height: 58, width: 74 }}
                source={{ uri: item.thumbnail }}
              />
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

  headerText: {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressedButton: {
    backgroundColor: '#3EBDAC',
    color: 'white',
    padding: 5,
    borderRadius: 3,
  },
  pressedButtonText: { color: 'white' },
});
export default SectorComponent;

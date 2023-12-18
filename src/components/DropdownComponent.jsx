import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {
  getAppLanguage,
  setAppLanguage,
} from '../translations/localLanguagesController';

const data = [
  { label: 'English', value: 'en' },
  { label: 'Arabic', value: 'ar' },
];

const DropdownComponent = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(getAppLanguage());

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => {}}
        onChange={(itemValue, itemIndex) => {
          setSelectedLanguage(itemValue);
          itemValue.value == 'en'
            ? setAppLanguage('en', true)
            : setAppLanguage('ar', true);
          setValue(itemValue);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <Text style={styles.lang}>
            {getAppLanguage() === 'en' ? 'English' : 'Arabic'}
          </Text>
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    paddingHorizontal: 20,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  lang: { fontSize: 16 },
});

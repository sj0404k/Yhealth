// YHealthTopBar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const YHealthTopBar = () => {
  return (
    <View style={styles.topBarContainer}>
      <Text style={styles.title}>
        <Text style={{ color: 'blue' }}>Y</Text>Health</Text>
      <View style={styles.icon}>
        <Icon.Button
          name="qrcode"
          size={31}
          color="black"
          backgroundColor='transparent'
          style={{ padding: 0, paddingRight: 6 }} />
        <Icon.Button
          name="scan-helper"
          size={31}
          color="black"
          backgroundColor='transparent'
          style={{ padding: 0}} />
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  topBarContainer: {
    backgroundColor: '#ffffff',
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    paddingLeft: 20,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  title: {
    color: '#000000',
    fontSize: 31,
    fontWeight: 'bold',
  },
  icon: {
    paddingTop: 5,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    flexDirection: 'row',
  },

});

export default YHealthTopBar;

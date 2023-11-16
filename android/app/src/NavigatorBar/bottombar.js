// YHealthTopBar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Bottombar = () => {
  return (
    <View style={styles.topBarContainer}>
      <Icon.Button name="home" size={30} color="black" />
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
    justifyContent: 'center',
    alignItems: 'stretch',
  },

});

export default Bottombar;

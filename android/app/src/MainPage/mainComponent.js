import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import YHealthTopBar from '../NavigatorBar/topbar';
import Busy from './busy';
import Weight from './weightChange';
import Board from './board';

const MainComponent = () => {
  const margin = 5;
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#dddddd', }}>
        <YHealthTopBar />
        <View style={styles.Container}>
          <Busy />
        </View>
        <View style={styles.Container}>
          <Weight />
        </View>
        <View style={styles.Container}>
          <Board />
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderRadius: 25,
    backgroundColor: '#ffffff',
    marginTop: 5,
    marginBottom: 5,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Noto Sans',
    fontWeight: '700',
  },
});

export default MainComponent;

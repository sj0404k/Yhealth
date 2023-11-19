import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Busy = () => {



  return (
    <View style={styles.container}>
      <Text style={styles.title}>헬스장 혼잡도</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Noto Sans',
    fontWeight: '700',
  },

});

export default Busy;

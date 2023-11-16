import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CalendarComponent from './myCalendar/CalendarComponent';
import MainComponent from './MainPage/mainComponent';
const App = () => {
  return (
    <View>
      <CalendarComponent />
      {/* <MainComponent/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
  },
});

export default App;

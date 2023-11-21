import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CalendarComponent from './myCalendar/CalendarComponent';
import MainComponent from './MainPage/mainComponent';

const App = () => {
  return (
    <View>
      <CalendarComponent />
      {/* <MainComponent /> */}
    </View>
  );
};

export default App;

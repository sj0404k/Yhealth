import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CalendarComponent from './myCalendar/CalendarComponent';
const App = () => {
  return (
    <View>
      <CalendarComponent />
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

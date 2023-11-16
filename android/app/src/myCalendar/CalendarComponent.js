// CalendarComponent.js

import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import YHealthTopBar from '../NavigatorBar/topbar';
import ExerciseGraph from './ExerciseGraph';
import ExerciseRecord from './ExerciseRecord';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };
  const renderHeader = (date) => {
    const month = date.toString('MMMM');
    return (
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 25 }}>{month}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#eeeeee', }}>
        <YHealthTopBar />
        <View style={{ padding: 2 }}>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: 'blue' },
            }}
            renderHeader={renderHeader}
            style={{ borderRadius: 30, padding: 12 }}
          /></View>

        <View style={{ padding: 3 }}>
          <ExerciseRecord />
        </View>
      </View>
    </ScrollView>
  );
};

export default CalendarComponent;

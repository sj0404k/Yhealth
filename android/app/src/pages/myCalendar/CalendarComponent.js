// CalendarComponent.js

import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import YHealthTopBar from '../NavigatorBar/topbar';
import ExerciseGraph from './ExerciseGraph';
import ExerciseRecord from './ExerciseRecord';

const CalendarComponent = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [exerciseData, setExerciseData] = useState([
    { date: '2023-11-20', exerciseType: '스쿼트', time: '1분00초', sets: '3세트', Reps: '30초' },
    { date: '2023-11-20', exerciseType: '벤치 프레스', time: '5분30초', sets: '4세트', Reps: '10초' },
    { date: '2023-11-23', exerciseType: '벤치 프레스', time: '5분30초', sets: '4세트', Reps: '10초' },
    { date: '2023-11-15', exerciseType: '벤치 프레스', time: '5분30초', sets: '4세트', Reps: '10초' },
    // 더 많은 운동 데이터와 날짜 추가
  ]);
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
  const markedDates = {};
  exerciseData.forEach((data) => {
    markedDates[data.date] = { marked: true };
  });
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#eeeeee', }}>
        <YHealthTopBar />
        <View style={{ padding: 2 }}>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={{
              ...markedDates,
              [selectedDate]: { selected: true, selectedColor: 'blue' },
            }}
            renderHeader={renderHeader}
            style={{ borderRadius: 30, padding: 12 }}
          /></View>
        <View style={{ padding: 3 }}>
          <ExerciseGraph />
        </View>
        <View style={{ padding: 3, backgroundColor: '#ffffff', borderRadius: 30 }}>
          <ExerciseRecord exerciseData={exerciseData} selectedDate={selectedDate} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CalendarComponent;

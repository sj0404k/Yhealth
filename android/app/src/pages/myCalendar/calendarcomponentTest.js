// CalendarComponent.js

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import YHealthTopBar from '../NavigatorBar/topbar';
import ExerciseGraph from './ExerciseGraph';
import ExerciseRecord from './ExerciseRecord';
import RNFS from 'react-native-fs';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    // 앱이 로드될 때 저장된 데이터를 읽어옴
    readDataFromFile('exerciseData').then((data) => {
      if (data) {
        setExerciseData(data);
      }
    });
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

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

  const saveExerciseData = async () => {
    // 선택한 날짜에 해당하는 운동 데이터를 저장
    const newData = exerciseData.filter((data) => data.date !== selectedDate);
    if (selectedDate) {
      const selectedData = {
        date: selectedDate,
        exerciseType: '새로운운동', // 새로운 운동 데이터 추가 시 변경
        time: '5분',
        sets: '3세트',
        Reps: '10초',
      };
      newData.push(selectedData);
    }
    setExerciseData(newData);

    // 데이터를 파일로 저장
    saveDataToFile('exerciseData', newData);
  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#eeeeee' }}>
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
          />
        </View>
        <View style={{ padding: 3 }}>
          <ExerciseGraph />
        </View>
        <View style={{ padding: 3, backgroundColor: '#ffffff', borderRadius: 30 }}>
          <ExerciseRecord exerciseData={exerciseData} selectedDate={selectedDate} onSave={saveExerciseData} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CalendarComponent;

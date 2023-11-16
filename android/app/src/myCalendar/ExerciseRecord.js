import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width - 8;


const ExerciseRecord = () => {

  const exerciseData = [
    { exerciseType: '스쿼트', time: '1분00초', sets: '3세트',Reps:'30초' },
    { exerciseType: '벤치 프레스', time: '5분30초', sets: '4세트',Reps:'10초' },
    // 다른 운동 데이터 추가
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>운동 기록</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cell}>운동 이름</Text>
          <Text style={styles.cell}>운동 시간</Text>
          <Text style={styles.cell}>세트</Text>
          <Text style={styles.cell}>휴식</Text>
        </View>
        {exerciseData.map((data, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{data.exerciseType}</Text>
            <Text style={styles.cell}>{data.time}</Text>
            <Text style={styles.cell}>{data.sets}</Text>
            <Text style={styles.cell}>{data.Reps}</Text>
          </View>
        ))}
      </View>
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
  table: {
    flexDirection: 'column',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  cell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
  },
});

export default ExerciseRecord;

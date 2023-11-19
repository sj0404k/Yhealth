import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width - 8;

const exerciseData = [
  { day: '월', time: 20 },
  { day: '월', time: 20 },
  { day: '월', time: 80 },
  { day: '월', time: 20 },
  { day: '월', time: 20 },
  { day: '월', time: 20 },
  { day: '월', time: 20 },
  { day: '월', time: 12 },
]

const limitedexerciseData = exerciseData.slice(-7);

const data = {
  labels: limitedexerciseData.map((dataPoint) => dataPoint.day),
  datasets: [
    {
      data: limitedexerciseData.map((dataPoint) => dataPoint.time),
    },
  ],
};

const ExerciseGraph = () => {

  const formatYLabel = (value) => `${value}`;
  return (
    <View>
      <Text style={styles.title}> 운동시간 그래프</Text>
      <BarChart
        data={data}
        width={screenWidth}
        height={200}
        yAxisSuffix="분"
        fromZero={true}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: 'gray',
          backgroundGradientTo: '#000000',
          decimalPlaces: 0,
          barPercentage: 1.3,
          color: (opacity = 1.0) => `rgba(255, 255, 255, ${opacity})`, // 예시로 흰색으로 설정
        }}
        style={{
          marginVertical: 2,
          borderRadius: 16,
          paddingRight: 40,

        }}
        formatYLabel={formatYLabel}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
  }
})

export default ExerciseGraph;
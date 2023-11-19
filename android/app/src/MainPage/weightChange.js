import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width - 8;
const Weight = () => {

  const weightData = [
    { date: '월', weight: 12 },
    { date: '화', weight: 30 },
    { date: '수', weight: 30 },
    { date: '목', weight: 30 },
    { date: '금', weight: 30 },
    { date: '화', weight: 18 },
    { date: '화', weight: 15 },
  ]
  const limitedweightData = weightData.slice(-7);
  const data = {
    labels: limitedweightData.map((dataPoint) => dataPoint.date),
    datasets: [
      {
        data: limitedweightData.map((dataPoint) => dataPoint.weight),
      },
    ],
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>체중 변화</Text>
      <LineChart
        data={data}
        width={screenWidth}
        height={200}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2, // 소수점 자리수
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // 선 색상 설정
          style: {
            borderRadius: 16,
          },
        }}
        bezier={false}
        style={{ borderRadius: 16, alignSelf: 'center' }}
      />
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

export default Weight;

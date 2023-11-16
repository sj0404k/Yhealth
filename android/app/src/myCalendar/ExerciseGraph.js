import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['월', '화', '수', '목', '금', '토', '일', ''],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 50, 0],
    },
  ],
};

const ExerciseGraph = () => {
  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: 'gray',
    backgroundGradientTo: '#000000',
    decimalPlaces: 0,
    barPercentage: 1.3,
    color: (opacity = 1.0) => `rgba(255, 255, 255, ${opacity})`, // 예시로 흰색으로 설정
  };
  const formatYLabel = (value) => `${value}`;
  return (
      <View>
        <Text style={styles.title}> 운동시간 그래프</Text>
        <View>
          <BarChart
            data={data}
            width={screenWidth}
            height={200}
            yAxisSuffix="분"
            chartConfig={chartConfig}
            style={{
              marginVertical: 2,
              borderRadius: 16,
              padding: 0,
            }}
            formatYLabel={formatYLabel}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
  }
})

export default ExerciseGraph;
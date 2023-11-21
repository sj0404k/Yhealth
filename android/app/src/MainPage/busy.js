import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const Busy = () => {
  const data = {
    labels: ['여유', '보통', '혼잡'],
    datasets: [
      {
        data: [50], // 여유, 보통, 혼잡에 해당하는 값
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>헬스장 혼잡도</Text>
      {/* <BarChart
        style={styles.chart}
        data={data}
        width={300}
        height={200}
        yAxisLabel="%"
        chartConfig={chartConfig}
        horizontal
        fromZero
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Noto Sans',
    fontWeight: '700',
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default Busy;

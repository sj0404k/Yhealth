import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Board = () => {
  const boardData = [
    { title: '1', like: 5, visit: 8, time: '2023.01.01' },
    { title: '2', like: 5, visit: 8, time: '2023.01.01' },
    { title: '3', like: 5, visit: 8, time: '2023.01.01' },
    { title: '4', like: 5, visit: 8, time: '2023.01.01' },
    { title: '5', like: 5, visit: 8, time: '2023.01.01' },
    { title: '6', like: 5, visit: 8, time: '2023.01.01' },
    { title: '7', like: 5, visit: 8, time: '2023.01.01' },
    { title: '8', like: 5, visit: 8, time: '2023.01.01' },
    { title: '9', like: 5, visit: 8, time: '2023.01.01' },
  ];

  const limitedBoardData = boardData.slice(-6);// 마지막 6개 데이터 가져오기
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
        <Text style={styles.title}>게시판</Text>
        <Text style={{ paddingRight: 20, color: '#FF0000', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400' }}>
          더보기 {'>'}
        </Text>
      </View>

      {limitedBoardData.map((item, index) => (
        <View key={index} style={styles.boardItem}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemText}>
            {item.title}
          </Text>
          <Text style={styles.itemText}>{item.time}</Text>
        </View>
      ))}
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
  },
  boardItem: {
    flexDirection: 'row', // 가로로 배치
    justifyContent: 'space-between', // 각 항목 사이의 공간을 균등하게 배치
    alignItems: 'center', // 수직 정렬을 가운데로
    padding: 5,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  itemText: {
    marginRight: 10,
  },
});

export default Board;

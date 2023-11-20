import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Test = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [comment, setComment] = useState('');

  return (
    <View>
      <View style={styles.row}>
        <View style={[styles.container, styles.borderRight]}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="닉네임"
            value={nickname}
            onChangeText={(text) => setNickname(text)}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="비밀번호"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>
      <View>
        <TextInput
          style={styles.textInputStyle}
          placeholder="댓글을 입력하세요"
          multiline={true}
          numberOfLines={4}
          value={comment}
          onChangeText={(text) => setComment(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  borderRight: {
    borderRightWidth: 1,
  },
  textInputStyle: {
    paddingLeft: 2,
    color: 'rgba(0, 0,  0,0.70)',
    fontSize: 15,
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    wordWrap: 'break-word',
  },
});

export default Test;

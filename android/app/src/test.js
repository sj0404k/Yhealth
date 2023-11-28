import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const BulletinBoardPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <TopBar2 />
        <StatusBar backgroundColor={theme.background} />
        <View style={styles.NoticeBoardContainer}>
          <NoticeBoard title="게시판" />
        </View>
        <View>

        </View>
        <View style={styles.Button1Container}>
          <Button1 title="글 작성하기" />
        </View>
      </View>
    </ThemeProvider>
  );
};


const styles = StyleSheet.create({
  
});

export default BulletinBoardPage;
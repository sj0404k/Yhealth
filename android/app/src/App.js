import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CalendarComponent from './myCalendar/CalendarComponent';
import MainComponent from './pages/MainPage/mainComponent';

const Tab = createBottomTabNavigator();
enableScreens();

const tabBarOptions = {
  activeTintColor: 'blue', // 선택된 탭의 색상
  inactiveTintColor: 'gray', // 비활성화된 탭의 색상
  style: {
    backgroundColor: 'white', // 탭 바의 배경색
  },
  labelStyle: {
    fontSize: 16, // 탭 레이블의 글꼴 크기
  },
  tabStyle: {
    justifyContent: 'center', // 각 탭의 내용을 가운데 정렬
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === '메인') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
              } else if (route.name === '달력') {
                iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={tabBarOptions}
        >
          <Tab.Screen name="메인" component={MainComponent} />
          <Tab.Screen name="달력" component={CalendarComponent} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

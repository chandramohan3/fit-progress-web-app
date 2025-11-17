import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/DashboardScreen';
import DailyInputScreen from './src/screens/DailyInputScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SummaryScreen from './src/screens/SummaryScreen';
import AuthScreen from './src/screens/AuthScreen';
import WeeklyAnalyticsScreen from './src/screens/WeeklyAnalyticsScreen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { initDB } from './src/services/db';

export type RootStackParamList = {
  Auth: undefined;
  Dashboard: undefined;
  DailyInput: undefined;
  Profile: undefined;
  Summary: { date?: string } | undefined;
  Weekly: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    initDB();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="DailyInput" component={DailyInputScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Summary" component={SummaryScreen} />
          <Stack.Screen name="Weekly" component={WeeklyAnalyticsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

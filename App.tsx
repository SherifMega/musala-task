import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import './src/lang/index';

const linking: any = {
  prefixes: ['https://mobiletask.com', 'mobiletask://'],
  config: {
    screens: {
      BottomTabs: {
        screens: {
          News: 'news/:searchText',
          Settings : 'settings'
        },
      },
    },  
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <AppStack />
    </NavigationContainer>
  );
}
import React, { Suspense } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { DARK_COLOR, LIGHT_COLOR } from '../constants/colors';
import { RootStackParamList } from '../interfaces/Props';
import BottomTabs from './BottomTabs';
import NewsDetails from '../screens/News/NewsDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  const theme = useColorScheme();
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          headerShown: false,
          title: t('news'),
          headerTintColor: theme == 'dark' ? LIGHT_COLOR : DARK_COLOR,
          headerStyle: {
            backgroundColor: theme == 'dark' ? DARK_COLOR : LIGHT_COLOR,
          },
        }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{
          title: t('newsDetails'),
          headerTintColor: theme == 'dark' ? LIGHT_COLOR : DARK_COLOR,
          headerStyle: {
            backgroundColor: theme == 'dark' ? DARK_COLOR : LIGHT_COLOR,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
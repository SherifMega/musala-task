import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings/Settings';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useColorScheme } from 'react-native';
import { DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR } from '../constants/colors';
import { useTranslation } from 'react-i18next';
import News from '../screens/News/News';
import { TAB_FONT_SIZE } from '../constants/fonts';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const theme = useColorScheme();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        let tabBarLabel = t('news');
        let headerShown = true;
        let tabBarIconName = 'home';
        switch (route.name) {
          case 'News':
            tabBarLabel = t('news');
            tabBarIconName = "home";
            break;
          case 'Settings':
            tabBarLabel = t('settings');
            tabBarIconName = "cog";
            break;
        }
        return {
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Icon
                name={tabBarIconName}
                size={size}
                color={theme == 'dark' ? (focused ? PRIMARY_COLOR : LIGHT_COLOR) : (focused ? PRIMARY_COLOR : DARK_COLOR)}
              />
            )
          },
          tabBarLabel,
          tabBarLabelStyle: {
            fontSize: TAB_FONT_SIZE,
            color: theme == 'dark' ? LIGHT_COLOR : DARK_COLOR,
            marginBottom: 2
          },
          tabBarStyle: {
            backgroundColor: theme == 'dark' ? DARK_COLOR : LIGHT_COLOR,
          },
          headerStyle: {
            backgroundColor: theme == 'dark' ? DARK_COLOR : LIGHT_COLOR,
          },
          headerShown
        };
      }}>
      <Tab.Screen
        name="News"
        component={News}
        options={{
          title: t('news'),
          headerTintColor: theme == 'dark' ? LIGHT_COLOR : DARK_COLOR,
          headerStyle: {
            backgroundColor: theme == 'dark' ? DARK_COLOR : LIGHT_COLOR,
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: t('settings'),
          headerTintColor: theme == 'dark' ? LIGHT_COLOR : DARK_COLOR,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

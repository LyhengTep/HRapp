import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '@screens/Home';
import ActivityScreen from '@screens/Activity';
import Icon from '@components/Icon';
import {bottomTabarIconHelper} from '@utils/index';
import NotificationScreen from '@screens/Notification';
import ProfileScreen from '@screens/Profile';
import { IconSizes } from '@themes/size';

const Tab = createBottomTabNavigator();
export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = bottomTabarIconHelper(route.name, focused);
            return <Icon name={iconName} color={color} size={IconSizes.md}/>;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

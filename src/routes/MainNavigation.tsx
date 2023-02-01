import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '@screens/Home';
import ActivityScreen from '@screens/Activity';
import Icon from '@components/Icon';
import {bottomTabarIconHelper} from '@utils/index';

const Tab = createBottomTabNavigator();
export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = bottomTabarIconHelper(route.name, focused);
            return <Icon name={iconName} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

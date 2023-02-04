import {AppText} from '@components/AppText';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getProtectedShield} from '@utils/index';

const NotificationScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={StyleSheet.flatten([getProtectedShield(insets)])}>
      <AppText>This is notification screen</AppText>
    </View>
  );
};

export default NotificationScreen;

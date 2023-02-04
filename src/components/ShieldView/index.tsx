import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getProtectedShield} from '@utils/index';

interface IShieldView {
  children?: JSX.Element;
  style?: ViewStyle;
}

export const ShieldView = ({children, style}: IShieldView) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={StyleSheet.flatten([getProtectedShield(insets), style])}>
      {children}
    </View>
  );
};

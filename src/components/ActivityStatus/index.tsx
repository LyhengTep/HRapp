import {AppText} from '@components/AppText';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IActivityStatus {
  status?: string;
  danger?: boolean;
  success?: boolean;
}
export const ActivityStatus = ({status, danger, success}: IActivityStatus) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        danger && styles.danger,
        success && styles.success,
      ])}>
      <AppText
        style={StyleSheet.flatten([
          styles.normalText,
          danger && styles.dangerText,
          success && styles.successText,
        ])}
        h6
        bold>
        {status || 'Annual Leave'}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#fae1b4',
    position: 'relative',
    borderRadius: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
  },
  normalText: {
    color: '#f5a311',
  },
  danger: {
    backgroundColor: '#e6b8b8',
  },
  dangerText: {
    color: '#d90f0f',
  },

  success: {
    backgroundColor: '#b8e6bd',
  },
  successText: {
    color: '#06d11e',
  },
});

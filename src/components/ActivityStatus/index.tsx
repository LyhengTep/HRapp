import {AppText} from '@components/AppText';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ActivityStatus = () => {
  return (
    <View style={styles.container}>
      <AppText style={{color: '#f5a311'}} h6 bold>
        Annual Leave
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#fae1b4',
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

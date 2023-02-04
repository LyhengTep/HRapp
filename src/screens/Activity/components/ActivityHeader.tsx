import {AppText} from '@components/AppText';
import Icon from '@components/Icon';
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

export const ActivityHeader = () => {
  return (
    <View style={styles.container}>
      <AppText h1 bold>
        Activity
      </AppText>
      <AcitivtityFilterButton />
    </View>
  );
};

export const AcitivtityFilterButton = () => {
  return (
    <TouchableOpacity style={styles.btnContainerStyle}>
      <AppText>All</AppText>
      <Icon name="chevron-down" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    minWidth: 50,
    backgroundColor: '#e2d3eb',
    height: 25,
    borderRadius: 15,
  },
});

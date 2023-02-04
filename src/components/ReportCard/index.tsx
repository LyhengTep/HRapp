import {AppText} from '@components/AppText';
import {Avatar} from '@components/Avatar';
import {ActivityStatus} from '@components/ActivityStatus';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ReportCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <NameHeader />
        <Avatar />
      </View>
      <ActivityStatus />
    </View>
  );
};

export const NameHeader = () => {
  return (
    <View>
      <AppText h3 bold style={{marginBottom: 5}}>
        Sreng Sivmeng
      </AppText>
      <AppText>IOS Developer</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    backgroundColor: '#f2edf7',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

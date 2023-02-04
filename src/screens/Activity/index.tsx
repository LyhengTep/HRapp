import {ActivityCard} from '@components/ActivityCard';
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getProtectedShield} from '@utils/index';
import {ActivityHeader} from './components/ActivityHeader';
import {ShieldView} from '@components/ShieldView';

const ActivityScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <ShieldView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ActivityHeader />
        <ActivityCard status="Waiting Approval" />
        <ActivityCard status="Rejected" danger emoji="🏖" />
        <ActivityCard status="Approved" success emoji="🚨" />
      </ScrollView>
    </ShieldView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
export default ActivityScreen;

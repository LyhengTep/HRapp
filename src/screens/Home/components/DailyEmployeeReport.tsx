import {AppText} from '@components/AppText';
import {ReportCard} from '@components/ReportCard';
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

export const DailyEmployeeReport = () => {
  return (
    <View style={StyleSheet.flatten([styles.container])}>
      <ReportHeadline />
      <ReportCard />
      <ReportCard />
    </View>
  );
};

const ReportHeadline = () => {
  return (
    <View style={styles.headlineContainer}>
      <AppText h3 bold>
        Daily Employee Report
      </AppText>
      <TouchableOpacity style={styles.filterButton}>
        <AppText style={{color: '#7416f5'}}>All</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: '100%',
    paddingTop: 50,
  },
  headlineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: '#f2edf7',
    borderRadius: 11,
  },
});

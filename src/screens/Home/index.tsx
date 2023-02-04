import {MenuButton} from '@components/MenuButton';
import {EmployeeCard} from '@components/EmployeeCard';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Menu} from './components/Menu';
import {DailyEmployeeReport} from './components/DailyEmployeeReport';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewcontainer}
        showsVerticalScrollIndicator={false}>
        <EmployeeCard />
        <Menu />
        <DailyEmployeeReport />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewcontainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  container: {flex: 1, backgroundColor: 'white'},
});
export default HomeScreen;

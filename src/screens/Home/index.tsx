import {MenuButton} from '@components/MenuButton';
import {EmployeeCard} from '@components/EmployeeCard';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Menu} from './components/Menu';
import {DailyEmployeeReport} from './components/DailyEmployeeReport';
import {getProtectedShield} from '@utils/index';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ShieldView} from '@components/ShieldView';

function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <ShieldView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewcontainer}
        showsVerticalScrollIndicator={false}>
        <EmployeeCard />
        <Menu />
        <DailyEmployeeReport />
      </ScrollView>
    </ShieldView>
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
  container: {flex: 1, backgroundColor: 'white', paddingBottom: 0},
});
export default HomeScreen;

import {MenuButton} from '@components/MenuButton';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Menu = () => {
  return (
    <View style={styles.container}>
      <MenuButton iconColor="#cf1584" />
      <MenuButton
        icon="archive"
        name="Annual Leave"
        iconColor="#f2a011"
        gradientColors={['#eddabe', '#faf6f2']}
      />
      <MenuButton
        icon="credit-card"
        name="Payslip"
        iconColor="#1164f2"
        gradientColors={['#bedaed', '#f2f6fa']}
      />
      <MenuButton
        icon="file-text"
        iconColor="#49f211"
        name="Performance"
        gradientColors={['#d8f7d7', '#f3faf2']}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

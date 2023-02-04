import {AppText} from '@components/AppText';
import {Avatar} from '@components/Avatar';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IFooterContent {
  title?: string;
  value?: string;
  end?: boolean;
}
export const EmployeeCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headLine}>
        <EmployeeName />
        <Avatar />
      </View>

      <View style={styles.footer}>
        <FooterContent />
        <FooterContent title="Division" value="Digital Team" end />
      </View>
    </View>
  );
};

export const EmployeeName = () => {
  return (
    <View>
      <AppText h2 bold white>
        TEP LYHENG
      </AppText>
      <AppText h6 style={StyleSheet.flatten([styles.greyTextStyle])}>
        System Architect
      </AppText>
    </View>
  );
};

export const FooterContent = ({title, value, end}: IFooterContent) => {
  return (
    <View>
      <AppText
        h5
        style={StyleSheet.flatten([
          end && styles.footerTextAlignmentEnd,
          styles.greyTextStyle,
        ])}>
        {title || 'Employee ID'}
      </AppText>
      <AppText
        h5
        bold
        white
        style={StyleSheet.flatten([end && styles.footerTextAlignmentEnd])}>
        {value || '052020'}
      </AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: '#5221c2',
    borderRadius: 20,
    marginVertical: 20,
    padding: 18,
    justifyContent: 'space-between',
  },
  headLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  footerTextAlignmentEnd: {
    textAlign: 'right',
  },
  greyTextStyle: {
    color: '#ababab',
  },
});

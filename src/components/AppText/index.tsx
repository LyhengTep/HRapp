import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

interface IAppText {
  children?: JSX.Element | JSX.Element[] | string | string[];
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  bold?: boolean;
  white?: boolean;
  style?: TextStyle;
}
export const AppText = ({
  children,
  style,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  bold,
  white,
}: IAppText) => {
  return (
    <Text
      style={StyleSheet.flatten([
        style,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        h4 && styles.h4,
        h5 && styles.h5,
        h6 && styles.h6,
        white && styles.white,
        bold && styles.bold,
      ])}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 18.72,
  },
  h4: {
    fontSize: 16,
  },
  h5: {
    fontSize: 13.28,
  },
  h6: {
    fontSize: 10.72,
  },
  bold: {
    fontWeight: 'bold',
  },
  white: {
    color: 'white',
  },
});

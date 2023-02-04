import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const Avatar = () => {
  return (
    <Image
      source={{uri: 'https://avatars.githubusercontent.com/u/22426004?v=4'}}
      style={StyleSheet.flatten([styles.img])}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
});

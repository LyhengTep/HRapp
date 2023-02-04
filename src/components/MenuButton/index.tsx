import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from '@components/Icon';
import {IconSizes} from '@themes/size';
import LinearGradient from 'react-native-linear-gradient';

interface IMenuButton {
  icon?: string;
  name?: string;
  gradientColors?: string[];
  iconColor?: string;
}
export const MenuButton = ({
  icon,
  name,
  gradientColors,
  iconColor,
}: IMenuButton) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <LinearGradient
          colors={gradientColors || ['#edcce0', '#faf2f7']}
          style={styles.btnContainer}>
          <Icon
            name={icon || 'calendar'}
            size={IconSizes.lg}
            color={iconColor}
          />
        </LinearGradient>
      </TouchableOpacity>

      <Text>{name || 'Attendance'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    height: 65,
    width: 65,
    backgroundColor: '#e8e7e6',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
enum IconType {
  Feather,
}

interface IIconProps {
  type?: IconType;
  name: string;
  size?: number;
  color?: string;
}

const Icon = ({type, name, size, color}: IIconProps) => {
  switch (type) {
    default:
      return <Feather name={name} size={size} color={color} />;
  }
};

export default Icon;

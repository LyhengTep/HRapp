export const bottomTabarIconHelper = (routeName: string, focus: boolean) => {
  let iconName: string = '';
  let color = focus ? 'blue' : 'grey';
  switch (routeName) {
    case 'Activity':
      iconName = 'trending-up';
      break;
    case 'Notification':
      iconName = 'bell';
      break;
    case 'Profile':
      iconName = 'user';
      break;
    default:
      iconName = 'grid';
  }

  return iconName;
};

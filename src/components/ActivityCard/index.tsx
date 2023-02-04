import {AppText} from '@components/AppText';
import {ActivityStatus} from '@components/ActivityStatus';
import React from 'react';
import {StyleSheet, View} from 'react-native';
interface IActivityCard {
  status?: string;
  danger?: boolean;
  success?: boolean;
  emoji?: string;
}
export const ActivityCard = ({
  status,
  danger,
  success,
  emoji,
}: IActivityCard) => {
  return (
    <View style={StyleSheet.flatten([styles.container])}>
      <View style={styles.descriptionContainer}>
        <View>
          <AppText h3 bold>
            Sick
          </AppText>
          <AppText unimportant h6>
            27 Feb - 4 March 2023{' '}
          </AppText>
        </View>
        <ActivityStatus status={status} danger={danger} success={success} />
      </View>
      <View style={styles.emojiContainer}>
        <AppText style={{fontSize: 50}}>{emoji || '🤒'}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    borderRadius: 20,
    backgroundColor: '#f3f0f5',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textHeaderContainer: {},
  descriptionContainer: {
    justifyContent: 'space-between',
    height: '100%',
  },
  emojiContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e2da',
    borderRadius: 40,
  },
});

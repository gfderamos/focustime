import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing } from '../utils/sizes'

import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.container}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
        <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md
  }
});

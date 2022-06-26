import React from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';

import styles from './style';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color="#8863E6" size="large" />
    </SafeAreaView>
  );
};

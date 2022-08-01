import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

export default ({icon, text}) => {
  return (
    <View style={styles.emptyList}>
      <Icon name={icon} size={56} color="#8B63E7" />
      <Text style={styles.emptyText}>{text}</Text>
    </View>
  );
};

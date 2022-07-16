import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';

export default () => {
  return (
    <View style={styles.emptyList}>
      <Icon name="folder-open" size={56} color="#666e78" />
      <Text style={styles.emptyText}>Não há avisos no momento</Text>
    </View>
  );
};

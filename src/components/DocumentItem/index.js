import React from 'react';
import {Linking, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';

export default ({data}) => {
  async function handleDocumentButton() {
    const supported = await Linking.canOpenURL(data.file_url);

    if (supported) {
      await Linking.openURL(data.file_url);
    }
  }

  return (
    <TouchableOpacity onPress={handleDocumentButton} style={styles.box}>
      <Icon name="file-text" size={30} color="#8B63E7" />
      <Text style={styles.title}>{data.title}</Text>
    </TouchableOpacity>
  );
};

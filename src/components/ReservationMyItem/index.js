import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import dateFormat from 'dateformat';

import styles from './style';

export default ({data}) => {
  return (
    <View style={styles.box}>
      <Image
        source={{uri: data.cover}}
        resizeMode="cover"
        style={styles.image}
      />

      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.text}>Horário reservado:</Text>

      <Text style={styles.date}>
        {data.reservation_date}
      </Text>
    </View>
  );
};

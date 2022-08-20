import React from 'react';
import {Text, Image, View, TouchableOpacity, Alert} from 'react-native';
import {Icon} from 'react-native-vector-icons/Ionicons';

import styles from './style';

export default ({data}) => {
  return (
    <View style={styles.box}>
      <Image
        source={{uri: data.photo}}
        resizeMode="cover"
        style={styles.image}
      />

      <Text style={styles.title}>{data.description}</Text>

      <Text style={styles.infoTitle}>Encontrado em</Text>
      <Text style={styles.infoText}>{data.where}</Text>

      <Text style={styles.infoTitle}>Data</Text>
      <Text style={styles.infoText}>{data.created_at}</Text>

      {/* <TouchableOpacity
        onPress={handleDeleteMyReservationButton}
        style={styles.button}
      >
        <Icon name="ios-close" size={25} color="#000000" />
        <Text>É meu</Text>
      </TouchableOpacity> */}
    </View>
  );
};

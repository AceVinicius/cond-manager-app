import React from 'react';
import {Text, Image, View, TouchableOpacity, Alert} from 'react-native';
import {Icon} from 'react-native-vector-icons/Ionicons';

import api from '../../services/api';
import styles from './style';

export default ({data}) => {
  async function handleDeleteMyReservationButton() {
    const response = await api.deleteMyReservations(data.id);

    if (response.message !== '') {
      Alert.alert('Minha Reserva', response.message);
    }
  }

  return (
    <View style={styles.box}>
      <Image
        source={{uri: data.cover}}
        resizeMode="cover"
        style={styles.image}
      />

      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.text}>Horário reservado:</Text>

      <Text style={styles.date}>{data.reservation_date}</Text>

      <TouchableOpacity
        onPress={handleDeleteMyReservationButton}
        style={styles.delete}>
        <Icon name="ios-close" size={25} color="#ff0000" />
      </TouchableOpacity>
    </View>
  );
};

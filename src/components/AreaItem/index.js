import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';

import styles from './style';

export default ({data}) => {
  const navigation = useNavigation();

  async function handleCreateReservationButton() {
    navigation.navigate('ReservationCreateScreen', {data});
  }

  return (
    <TouchableOpacity
      onPress={handleCreateReservationButton}
      style={styles.box}>
      <Image
        source={{uri: data.cover}}
        resizeMode="cover"
        style={styles.image}
      />

      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.text}>Horários de Funcionamento:</Text>

      {data.dates.map((item, index) => (
        <Text style={styles.date} key={index}>
          {item}
        </Text>
      ))}
    </TouchableOpacity>
  );
};

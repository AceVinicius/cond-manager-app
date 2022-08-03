import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, FlatList, RefreshControl} from 'react-native';

import api from '../../services/api';
import ItemEmpty from '../../components/ItemEmpty';
import ReservationMyItem from '../../components/ReservationMyItem';
import styles from './style';

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [myReservations, setMyReservations] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Minhas Reservas',
    });
    getMyReservations();
  }, [navigation]);

  async function getMyReservations() {
    setLoading(true);

    const response = await api.getMyReservations();

    if (response.message !== '') {
      Alert.alert('Minhas Reservas', response.message);
      setMyReservations([]);
      setLoading(false);
      return;
    }

    setMyReservations(response.reservations);
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={myReservations}
        refreshControl={
          <RefreshControl
            onRefresh={getMyReservations}
            refreshing={loading}
            title="Arraste para atualizar"
            tintColor="#8B63E7"
            titleColor="#9C9DB9"
          />
        }
        renderItem={({item}) => <ReservationMyItem data={item} />}
        ListEmptyComponent={
          <ItemEmpty
            icon="ios-today"
            text="Você não possui reservas no momento."
          />
        }
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

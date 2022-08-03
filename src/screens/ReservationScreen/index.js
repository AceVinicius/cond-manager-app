import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  View,
  SafeAreaView,
  RefreshControl,
  Text,
  TouchableOpacity,
} from 'react-native';

import api from '../../services/api';
import AreaItem from '../../components/AreaItem';
import styles from './style';
import ItemEmpty from '../../components/ItemEmpty';

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Reservas Disponíveis',
    });
  }, [navigation]);

  useEffect(() => {
    getAreas();
  }, []);

  async function getAreas() {
    setLoading(true);

    const response = await api.getAreas();

    if (response.message !== '') {
      Alert.alert('Reservas', response.message);
      setList([]);
      setLoading(false);
      return;
    }

    setList(response.areas);
    setLoading(false);
  }

  function handleMyReservationsButton() {
    navigation.navigate('ReservationMyScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <TouchableOpacity
          onPress={handleMyReservationsButton}
          style={styles.button}>
          <Text style={styles.buttonText}>Minhas Reservas</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Selecione uma área</Text>
      </View>

      <FlatList
        data={list}
        refreshControl={
          <RefreshControl
            onRefresh={getAreas}
            refreshing={loading}
            title="Arraste para atualizar"
            tintColor="#8B63E7"
            titleColor="#9C9DB9"
          />
        }
        renderItem={({item}) => <AreaItem data={item} />}
        ListEmptyComponent={
          <ItemEmpty
            icon="ios-today"
            text="Não há áreas disponíveis no momento."
          />
        }
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

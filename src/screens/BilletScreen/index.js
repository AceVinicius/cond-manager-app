import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  View,
  RefreshControl,
} from 'react-native';

import api from '../../services/api';
import styles from './style';
import BilletItem from '../../components/BilletItem';
import ItemEmpty from '../../components/ItemEmpty';

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [billetList, setBilletList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Boletos',
    });
  }, []);

  useEffect(() => {
    getBillets();
  }, []);

  async function getBillets() {
    setLoading(true);
    setBilletList([]);

    const response = await api.getBillet();

    if (response.message !== '') {
      Alert.alert('Boletos', response.message);
      setLoading(false);
      return;
    }

    setBilletList(response.billets);
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      {!loading && (
        <FlatList
          data={billetList}
          refreshControl={
            <RefreshControl
              onRefresh={getBillets}
              refreshing={loading}
              title="Arraste para atualizar"
              tintColor="#8B63E7"
              titleColor="#9C9DB9"
            />
          }
          renderItem={({item}) => <BilletItem data={item} />}
          ListEmptyComponent={
            <ItemEmpty
              icon="ios-receipt"
              text="Não há boletos nesta unidade no momento."
            />
          }
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
        />
      )}
    </SafeAreaView>
  );
};

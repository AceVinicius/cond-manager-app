import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, SafeAreaView, RefreshControl} from 'react-native';

import api from '../../services/api';
import styles from './style';
import WallItem from '../../components/WallItem';
import ItemEmpty from '../../components/ItemEmpty';

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [wallList, setWallList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Mural de Avisos',
    });
  }, [navigation]);

  useEffect(() => {
    getWall();
  }, []);

  async function getWall() {
    setLoading(true);

    const response = await api.getWall();

    if (response.message !== '') {
      Alert.alert('Mural de Avisos', response.message);
      setWallList([]);
      setLoading(false);
      return;
    }

    setWallList(response.walls);
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={wallList}
        refreshControl={
          <RefreshControl
            onRefresh={getWall}
            refreshing={loading}
            title="Arraste para atualizar"
            tintColor="#8B63E7"
            titleColor="#9C9DB9"
          />
        }
        renderItem={({item}) => <WallItem data={item} />}
        ListEmptyComponent={
          <ItemEmpty icon="ios-file-tray" text="Não há avisos no momento." />
        }
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

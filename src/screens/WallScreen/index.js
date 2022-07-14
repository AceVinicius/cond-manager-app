import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';
import styles from './style';
import WallItem from '../../components/WallItem';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);
  const [wallList, setWallList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Mural de Avisos',
    });
  }, []);

  useEffect(() => {
    getWall();
  }, []);

  async function getWall() {
    setLoading(true);
    setWallList([]);

    const response = await api.getWall();

    if (response.message !== '') {
      Alert.alert('Wall', response.message);
      setLoading(false);
      return;
    }

    setWallList(response.walls);
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        {!loading && wallList.length === 0 && (
          <View style={styles.emptyList}>
            <Icon name="folder-open" size={56} color="#666e78" />
            <Text style={styles.emptyText}>Não há avisos no momento</Text>
          </View>
        )}

        {!loading && wallList.length > 0 && (
          <FlatList
            data={wallList}
            onRefresh={getWall}
            refreshing={loading}
            renderItem={({item}) => <WallItem data={item} />}
            keyExtractor={(item) => item.id.toString()}
            style={styles.list}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

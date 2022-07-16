import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, SafeAreaView, View} from 'react-native';

import api from '../../services/api';
import styles from './style';
import DocumentItem from '../../components/DocumentItem';
import ItemEmpty from '../../components/ItemEmpty';
import {useStateValue} from '../../contexts/StateContext';

export default () => {
  const navigation = useNavigation();
  const [context] = useStateValue();
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

    const response = await api.getBillet(context.user.property.id);

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
      <View style={styles.padding}>
        {!loading && (
          <FlatList
            data={billetList}
            onRefresh={getBillets}
            refreshing={loading}
            renderItem={({item}) => <DocumentItem data={item} />}
            ListEmptyComponent={
              <ItemEmpty icon="file-text" text="Não há boletos no momento." />
            }
            keyExtractor={(item) => item.id.toString()}
            style={styles.list}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

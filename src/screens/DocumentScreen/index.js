import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, SafeAreaView, View, RefreshControl} from 'react-native';

import api from '../../services/api';
import styles from './style';
import DocumentItem from '../../components/DocumentItem';
import ItemEmpty from '../../components/ItemEmpty';

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [documentList, setDocumentList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Documentos do Condomínio',
    });
  }, []);

  useEffect(() => {
    getDocuments();
  }, []);

  async function getDocuments() {
    setLoading(true);
    setDocumentList([]);

    const response = await api.getDocument();

    if (response.message !== '') {
      Alert.alert('Documentos', response.message);
      setLoading(false);
      return;
    }

    setDocumentList(response.documents);
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        {!loading && (
          <FlatList
            data={documentList}
            refreshControl={
              <RefreshControl
                onRefresh={getDocuments}
                refreshing={loading}
                title="Arraste para atualizar"
                tintColor="#8B63E7"
                titleColor="#8B63E7"
               />
            }
            renderItem={({item}) => <DocumentItem data={item} />}
            ListEmptyComponent={
              <ItemEmpty
                icon="file-text"
                text="Não há documentos no momento."
              />
            }
            keyExtractor={(item) => item.id.toString()}
            style={styles.list}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

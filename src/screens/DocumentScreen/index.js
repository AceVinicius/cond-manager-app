import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, SafeAreaView, View} from 'react-native';

import api from '../../services/api';
import styles from './style';
import DocumentItem from '../../components/DocumentItem';
import DocumentItemEmpty from '../../components/DocumentItemEmpty';

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
    getDocument();
  }, []);

  async function getDocument() {
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
            onRefresh={getDocument}
            refreshing={loading}
            renderItem={({item}) => <DocumentItem data={item} />}
            ListEmptyComponent={<DocumentItemEmpty />}
            keyExtractor={(item) => item.id.toString()}
            style={styles.list}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

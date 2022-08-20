import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, Text, View, Alert, SafeAreaView} from 'react-native';

import api from '../../services/api';
import styles from './style';
import LostItem from '../../components/LostItem';
import ItemEmpty from '../../components/ItemEmpty';

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [lostList, setLostList] = useState([]);
  const [foundList, setFoundList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Achados e Perdidos',
    });
  }, [navigation]);

  useEffect(() => {
    getLostAndFound();
  }, []);

  async function getLostAndFound() {
    setLoading(true);

    const response = await api.getLostAndFound();

    if (response.message !== '') {
      Alert.alert('Achados e Perdidos', response.message);
      setLostList([]);
      setFoundList([]);
      setLoading(false);
      return;
    }

    setLostList(response.lost);
    setFoundList(response.found);
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.photoScroller}>
        {loading && (
          <ActivityIndicator color="#8863E6" style={styles.loading} />
        )}

        {!loading && lostList.length === 0 && foundList.length === 0 &&
          <View style={styles.emptyList}>
            <Text style={styles.emptyListText}>Não há itens achados/perdidos.</Text>
          </View>
        }

        {!loading && lostList.length > 0 && 
          <>
            <Text style={styles.title}>Itens Perdidos</Text>
            <ScrollView horizontal={true} style={styles.listScroller}>
              {lostList.map((item, index) => (
                <LostItem
                  key={index}
                  data={item}
                />
              ))}
            </ScrollView>
          </>
        }

        {!loading && foundList.length > 0 &&
          <>
            <Text style={styles.title}>Itens Achados</Text>
            <ScrollView horizontal={true} style={styles.listScroller}>
              {foundList.map((item, index) => (
                <LostItem
                  key={index}
                  data={item}
                />
              ))}
            </ScrollView>
          </>
        }
      </ScrollView>
    </SafeAreaView>
  );
};

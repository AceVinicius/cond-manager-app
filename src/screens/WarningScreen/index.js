import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import api from '../../services/api';
import ItemEmpty from '../../components/ItemEmpty';
import styles from './style';
import WarningItem from '../../components/WarningItem';

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [warningList, setWarningList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Livro de Ocorrências',
      headerRight: () => CreateHeaderButton({navigation}),
    });
  }, [navigation]);

  useEffect(() => {
    getWarnings();
  }, []);

  async function getWarnings() {
    setLoading(true);
    setWarningList([]);

    const response = await api.getWarnings();

    if (response.message !== '') {
      Alert.alert('Livro de Ocorrências', response.message);
      setLoading(false);
      return;
    }

    setWarningList(response.warnings);
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      {!loading && (
        <FlatList
          data={warningList}
          refreshControl={
            <RefreshControl
              onRefresh={getWarnings}
              refreshing={loading}
              title="Arraste para atualizar"
              tintColor="#8B63E7"
              titleColor="#9C9DB9"
            />
          }
          renderItem={({item}) => <WarningItem data={item} />}
          ListEmptyComponent={
            <ItemEmpty icon="ios-bug" text="Não há ocorrências no momento." />
          }
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
        />
      )}
    </SafeAreaView>
  );
};

const CreateHeaderButton = ({navigation}) => {
  async function handleCreateWarningButton() {
    navigation.navigate('WarningCreateScreen');
  }

  return (
    <TouchableOpacity
      onPress={handleCreateWarningButton}
      style={styles.headerRight}>
      <Icon name="ios-add-circle-outline" size={24} color="#0A60FE" />
    </TouchableOpacity>
  );
};

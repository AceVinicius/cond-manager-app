import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

import {useStateValue} from '../../contexts/StateContext';
import styles from './style';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Dados da unidade (${context.user.property.name})`,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.title}>
            Moradores
          </Text>

          <Text style={styles.text}>Vinícius Aguiar</Text>
          <Text style={styles.text}>Amanda Azevedo</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.title}>
            Pets
          </Text>

          <Text style={styles.text}>Nayla (Gata)</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.title}>
            Veículos
          </Text>

          <Text style={styles.text}>Fiat Palio ELX 1.4 86cv</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

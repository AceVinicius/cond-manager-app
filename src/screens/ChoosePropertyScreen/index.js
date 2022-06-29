import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import api from '../../services/api';
import styles from './style';

export default () => {
  const navigation = useNavigation();

  async function handleLogoutButton() {
    let response = await api.logout();

    if (response.error !== '') {
        alert(response.error);
        return;
    }

    navigation.reset({
        index: 1,
        routes: [{name: 'PreloadScreen'}],
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>

        <TouchableOpacity
          onPress={handleLogoutButton}
          style={styles.button}
        >
          <Text style={styles.text}>Sair</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

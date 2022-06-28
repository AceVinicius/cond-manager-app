import React, {useEffect} from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useStateValue} from '../../contexts/StateContext';
import styles from './style';
import api from '../../services/api';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  useEffect(() => {
    function goToLoginScreen() {
      navigation.reset({
        index: 1,
        routes: [{name: 'LoginScreen'}],
      });
    }

    function goToPropertyScreen() {
      navigation.reset({
        index: 1,
        routes: [{name: 'ChoosePropertyScreen'}],
      });
    }

    async function checkLogin() {
      let token = await api.getToken();

      if (!token) {
        goToLoginScreen();
        return;
      }

      let result = await api.validateToken();

      if (result.error !== '') {
        alert(result.error);
        dispatch({
          type: 'setToken',
          payload: {
            token: '',
          },
        });
        goToLoginScreen();
        return;
      }

      dispatch({
        type: 'wetUser',
        payload: {
          user: result.user,
        },
      });
      goToPropertyScreen();
    }

    checkLogin();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color="#8863E6" size="large" />
    </SafeAreaView>
  );
};

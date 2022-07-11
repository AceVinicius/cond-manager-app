import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';
import styles from './style';

export default () => {
  const navigation = useNavigation();
  const [, dispatch] = useStateValue();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  async function handleLoginButton() {
    if (!cpf) {
      Alert.alert('Input', 'Preencha o cpf');
      return;
    }

    if (!password) {
      Alert.alert('Input', 'Preencha a senha');
      return;
    }

    let response = await api.login(cpf, password);

    if (response.message !== '') {
      Alert.alert('Login', response.message);
      return;
    }

    dispatch({
      type: 'setToken',
      payload: {
        token: response.token,
      },
    });
    dispatch({
      type: 'setUser',
      payload: {
        user: response.user,
      },
    });

    navigation.reset({
      index: 1,
      routes: [{name: 'PreloadScreen'}],
    });
  }

  function handleRegisterButton() {
    navigation.navigate('RegisterScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <Image
          source={require('../../assets/login-image.png')}
          style={styles.image}
        />

        <TextInput
          placeholder="Digite seu CPF"
          keyboardType="numeric"
          value={cpf}
          onChangeText={(t) => setCpf(t)}
          style={styles.input}
        />
        <TextInput
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={(t) => setPassword(t)}
          style={styles.input}
        />

        <TouchableOpacity onPress={handleLoginButton} style={styles.button}>
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegisterButton} style={styles.button}>
          <Text style={styles.text}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

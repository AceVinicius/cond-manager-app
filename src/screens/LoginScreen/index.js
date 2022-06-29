import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';

import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';
import styles from './style';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  async function handleLoginButton() {
    if (!cpf) {
      alert('Preencha o cpf');
      return;
    }

    if (!password) {
      alert('Preencha a senha');
      return;
    }

    let response = await api.login(cpf, password);

    if (response.error !== "") {
      alert(response.error);
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
      routes: [{name: 'ChoosePropertyScreen'}],
    });
  }

  function handleRegisterButton() {
    navigation.navigate('RegisterScreen');
  }

  return (
    <SafeAreaView style={styles.container}>

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

      <TouchableOpacity
        onPress={handleLoginButton}
        style={styles.button}
      >
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleRegisterButton} 
        style={styles.button}
      >
        <Text style={styles.text}>Cadastrar-se</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

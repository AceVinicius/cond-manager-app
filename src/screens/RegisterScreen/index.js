import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Cadastro',
    });
  }, []);

  async function handleRegisterButton() {
    if (!name) {
      Alert.alert('Input', 'Preencha o nome');
      return;
    }

    if (!email) {
      Alert.alert('Input', 'Preencha o email');
      return;
    }

    if (!cpf) {
      Alert.alert('Input', 'Preencha o cpf');
      return;
    }

    if (!password) {
      Alert.alert('Input', 'Preencha a senha');
      return;
    }

    if (!confirmPassword) {
      Alert.alert('Input', 'Confirme a senha');
      return;
    }

    let response = await api.register(
      name,
      email,
      cpf,
      password,
      confirmPassword,
    );

    if (response.message !== '') {
      Alert.alert('Register', response.message);
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <TextInput
          placeholder="Digite seu Nome"
          value={name}
          onChangeText={(x) => setName(x)}
          style={styles.input}
        />
        <TextInput
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={(x) => setEmail(x)}
          style={styles.input}
        />
        <TextInput
          placeholder="Digite seu CPF"
          keyboardType="numeric"
          value={cpf}
          onChangeText={(x) => setCpf(x)}
          style={styles.input}
        />
        <TextInput
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={(x) => setPassword(x)}
          style={styles.input}
        />
        <TextInput
          placeholder="Confirme sua senha"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(x) => setConfirmPassword(x)}
          style={styles.input}
        />

        <TouchableOpacity onPress={handleRegisterButton} style={styles.button}>
          <Text style={styles.text}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

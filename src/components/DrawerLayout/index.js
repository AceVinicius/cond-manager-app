import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';
import {useStateValue} from '../../contexts/StateContext';
import styles from './style';

export default ({navigation, state}) => {
  const [context] = useStateValue();

  const menus = [
    {
      title: 'Mural de Avisos',
      icon: 'inbox',
      screen: 'WallScreen',
    },
    {
      title: 'Documentos',
      icon: 'file-text',
      screen: 'DocumentScreen',
    },
    {
      title: 'Reservas',
      icon: 'calendar',
      screen: 'ReservationScreen',
    },
    {
      title: 'Livro de Ocorrências',
      icon: 'bug',
      screen: 'WarningScreen',
    },
    {
      title: 'Achados e Perdidos',
      icon: 'search',
      screen: 'LostAndFoundScreen',
    },
    {
      title: 'Boletos',
      icon: 'wpforms',
      screen: 'BilletScreen',
    },
    {
      title: 'Perfil',
      icon: 'user',
      screen: 'ProfileScreen',
    },
  ];

  function handleMenuButton(screen) {
    try {
      navigation.navigate(screen);
    } catch (error) {
      Alert.alert(
        'Not Implemented Yet',
        "Whoaa, the button is working, but the screen doesn't exist yet.",
      );
    }
  }

  async function handleChangePropertyButton() {
    await AsyncStorage.removeItem('property');

    navigation.reset({
      index: 1,
      routes: [{name: 'ChoosePropertyScreen'}],
    });
  }

  async function handleLogoutButton() {
    let response = await api.logout();

    if (response.message !== '') {
      Alert.alert('Logout', response.message);
      return;
    }

    navigation.reset({
      index: 1,
      routes: [{name: 'LoginScreen'}],
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <View>
          <Text style={styles.logoText}>CondManager</Text>
        </View>
        <ScrollView style={styles.scroller}>
          {menus.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleMenuButton(item.screen)}
              key={index}
              style={styles.menuButton}>
              <View
                style={
                  index === state.index
                    ? styles.menuButtonSquareSelected
                    : styles.menuButtonSquare
                }
              />
              <Icon
                name={item.icon}
                size={20}
                color={index === state.index ? '#8863e6' : '#666e78'}
              />
              <Text
                style={
                  index === state.index
                    ? styles.menuButtonTextSelected
                    : styles.menuButtonText
                }>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={handleLogoutButton}
            style={styles.menuButton}>
            <View style={styles.menuButtonSquare} />
            <Icon name="toggle-left" size={20} color="#666e78" />
            <Text style={styles.menuButtonText}>Sair</Text>
          </TouchableOpacity>
        </ScrollView>
        <View>
          <TouchableOpacity
            onPress={handleChangePropertyButton}
            style={styles.button}>
            <Text style={styles.text}>Trocar Propriedade</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.footerTextName}>{context.user.user.name}</Text>
            <Text style={styles.footerTextUnit}>
              {context.user.property.name}
            </Text>
          </View>
          <TouchableOpacity onPress={() => handleMenuButton(null)}>
            <Icon name="gear" size={24} color="#666e78" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

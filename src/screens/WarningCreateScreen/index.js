import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchCamera} from 'react-native-image-picker';

import api from '../../services/api';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';

export default () => {
  const navigation = useNavigation();
  const [titleText, setTitleText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const [photoList, setPhotoList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Adicionar uma Ocorrência',
    });
  }, [navigation]);

  async function handleAddPhoto() {
    const settings = {
      mediaType: 'photo',
      maxWidth: 1280,
    };

    async function callback(photo) {
      if (photo.didCancel) {
        return;
      }

      setLoading(true);
      const response = await api.sendWarningFile(photo);

      if (response.message !== '') {
        Alert.alert('Adicionar uma Ocorrência', response.message);
        setLoading(false);
        return;
      }

      let list = [...photoList];
      list.push(response.photo);
      setLoading(false);
      setPhotoList(list);
    }

    launchCamera(settings, callback);
  }

  async function handleRemovePhoto(photoToRemove) {
    let list = [...photoList];
    list = list.filter((value) => value !== photoToRemove);
    setPhotoList(list);
  }

  async function handleCreateWarning() {
    if (!titleText) {
      Alert.alert('Formulário', 'Preencha o problema');
      return;
    }

    if (!descriptionText) {
      Alert.alert('Formulário', 'Descreva a ocorrência');
      return;
    }

    const response = await api.sendWarning(
      titleText,
      descriptionText,
      photoList,
    );

    if (response.message !== '') {
      Alert.alert('Adicionar uma Ocorrência', response.message);
      return;
    }

    navigation.navigate('WarningScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroller}>
        <Text style={styles.title}>Qual o problema?</Text>
        <TextInput
          value={titleText}
          onChangeText={(t) => setTitleText(t)}
          placeholder="Barulho, Obra fora de hora ..."
          style={styles.input}
        />

        <Text style={styles.title}>Descreva a ocorrência</Text>
        <TextInput
          value={descriptionText}
          onChangeText={(t) => setDescriptionText(t)}
          placeholder="Descrição detalhada do problema"
          style={styles.input}
        />

        <Text style={styles.title}>Fotos relacionadas</Text>
        <View style={styles.photoArea}>
          <ScrollView horizontal={true} style={styles.photoScroller}>
            <TouchableOpacity
              onPress={handleAddPhoto}
              style={styles.photoAddButton}>
              <Icon name="ios-camera" size={24} color="#8863e6" />
            </TouchableOpacity>

            {loading && (
              <ActivityIndicator color="#8863E6" style={styles.loading} />
            )}

            {photoList.map((item, index) => (
              <View key={index} style={styles.photoItem}>
                <Image source={{uri: item}} />
                <TouchableOpacity
                  onPress={() => handleRemovePhoto(item)}
                  style={styles.photoRemoveButton}>
                  <Icon name="" size={16} color="#ff0000" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity onPress={handleCreateWarning} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

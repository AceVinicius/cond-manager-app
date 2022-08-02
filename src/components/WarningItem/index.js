import React, {useState} from 'react';
import {View, Image, Modal, Text, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import dateFormat from 'dateformat';

import styles from './style';

export default ({data}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  async function handleModalOpenButton(item) {
    setModalImage(item);
    setShowModal(true);
  }

  async function handleModalCloseButton() {
    setShowModal(false);
  }

  return (
    <View style={styles.box}>
      <Text style={styles.date}>{dateFormat(new Date(data.created_at), 'dddd, d "de" mmmm, yyyy')}</Text>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.description}>{data.description}</Text>

      {data.photos.length > 0 && (
        <ScrollView horizontal={true} style={styles.photoArea}>
          {data.photos.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleModalOpenButton(item)}
              style={styles.photoItem}
              key={index}>
              <Image
                source={{uri: item}}
                resizeMode="cover"
                style={styles.photo}
              />

            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      <View style={styles.statusArea}>
        {data.status === 'IN_REVIEW' && (
          <>
            <Icon name="ios-file-tray-full" size={24} color="#8B63E7" />
            <Text style={styles.statusText}>Ocorrência em análise</Text>
          </>
        )}

        {data.status === 'RESOLVED' && (
          <>
            <Icon name="ios-file-tray" size={24} color="#8B63E7" />
            <Text style={styles.statusText}>Resolvido</Text>
          </>
        )}
      </View>

      <Modal animationType="slide" transparent={true} visible={showModal}>
        <SafeAreaView style={styles.modalArea}>
          <TouchableOpacity
            onPress={handleModalCloseButton}
            style={styles.modalCloseButton}>
            <Icon name="ios-close" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Image
            source={{uri: modalImage}}
            resizeMode="contain"
            style={styles.modalPhoto}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

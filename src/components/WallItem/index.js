import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import dateFormat from 'dateformat';

import api from '../../services/api';
import styles from './style';

export default ({data}) => {
  const [likeCount, setLikeCount] = useState(data.wall_likes_count);
  const [liked, setLiked] = useState(data.user_liked);

  async function handleLikeButton() {
    const response = await api.likeWallPost(data.id);

    if (response.message !== '') {
      Alert.alert('Like', response.message);
      return;
    }

    setLikeCount(response.wall_likes_count);
    setLiked(response.user_liked);
  }

  return (
    <View style={styles.box}>
      <View style={styles.header}>
        <Icon name="ios-newspaper" size={30} color="#8B63E7" />
        <View style={styles.info}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.date}>
            {dateFormat(
              new Date(data.created_at),
              'dddd, d "de" mmmm, yyyy',
            )}
          </Text>
        </View>
      </View>
      <Text style={styles.body}>{data.body}</Text>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleLikeButton} style={styles.likeButton}>
          {liked ? (
            <Icon name="ios-heart" size={17} color="#ff0000" />
          ) : (
            <Icon name="ios-heart-outline" size={17} color="#ff0000" />
          )}
        </TouchableOpacity>
        <Text style={styles.likeText}>
          {likeCount === 1
            ? `${likeCount} pessoa curtiu`
            : `${likeCount} pessoas curtiram`}
        </Text>
      </View>
    </View>
  );
};

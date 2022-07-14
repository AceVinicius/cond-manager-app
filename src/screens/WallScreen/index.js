import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView} from 'react-native';

import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';
import styles from './style';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroller}>
        {loading && <ActivityIndicator color="#8863E6" size="large" />}
      </ScrollView>
    </SafeAreaView>
  );
};

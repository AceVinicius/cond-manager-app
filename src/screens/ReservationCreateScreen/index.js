import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState, useRef} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import dateFormat from 'dateformat';
import {
  Alert,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import api from '../../services/api';
import styles from './style';

export default () => {
  const scroll = useRef();
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(true);
  const [disabledDates, setDisabledDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Reservar ${route.params.data.title}`,
    });
    getDisabledDays();
  }, [navigation, route]);

  useEffect(() => {
    getAvailableTimes();
  }, [selectedDate]);

  async function getDisabledDays() {
    setLoading(true);
    setDisabledDates([]);
    setSelectedDate(null);

    const response = await api.getDisabledDays(route.params.data.id);

    if (response.message !== '') {
      setLoading(false);
      Alert.alert('Reserva', response.message);
      return;
    }

    let dateList = [];

    for (let i in response.disabled) {
      dateList.push(new Date(response.disabled[i] + 'T00:00:00'));
    }

    setDisabledDates(dateList);
    setLoading(false);
  }

  async function getAvailableTimes() {
    setTimeList([]);
    setSelectedTime(null);

    if (!selectedDate) {
      return;
    }

    const response = await api.getReservationTimes(
      route.params.data.id,
      selectedDate,
    );

    if (response.message !== '') {
      Alert.alert('Reserva', response.message);
      return;
    }

    setTimeList(response.times);
    setTimeout(() => {
      scroll.current.scrollToEnd();
    }, 50);
  }

  async function handleDateChange(selected) {
    let date = dateFormat(new Date(selected), 'yyyy-mm-dd');
    setSelectedDate(date);
  }

  async function handleReservationButton() {
    if (!selectedDate) {
      Alert.alert('Reserva', 'Selecione a data');
      return;
    }

    if (!selectedTime) {
      Alert.alert('Reserva', 'Selecione o horário');
      return;
    }

    const response = await api.sendReservation(
      route.params.data.id,
      selectedDate,
      selectedTime,
    );

    if (response.message !== '') {
      Alert.alert('Reserva', response.message);
      return;
    }

    navigation.navigate('ReservationMyScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView ref={scroll} styles={styles.scroller}>
        <Image
          source={{uri: route.params.data.cover}}
          resizeMode="cover"
          style={styles.image}
        />

        {loading && (
          <ActivityIndicator
            color="#8863E6"
            size="large"
            style={styles.centerLoading}
          />
        )}

        {!loading && (
          <View style={styles.calendarArea}>
            <CalendarPicker
              onDateChange={handleDateChange}
              disabledDates={disabledDates}
              minDate={new Date()}
              maxDate={new Date().setMonth(new Date().getMonth() + 3)}
              weekdays={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']}
              months={[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
              ]}
              previousTitle="Anterior"
              nextTitle="Próximo"
              selectedDayColor="#8863e6"
              selectedDayTextColor="#ffffff"
              todayBackgroundColor="transparent"
              todayTextStyle="#000000"
              selectYearTitle="Selecione o Ano"
              selectMonthTitle="Selecione o Mês de "
            />
          </View>
        )}

        {!loading && selectedDate && (
          <>
            <Text style={styles.title}>
              Horários disponíveis em{' '}
              {dateFormat(
                new Date(selectedDate + 'T00:00:00'),
                'dddd, dd "de" mmmm, yyyy',
              )}
              :
            </Text>

            <View style={styles.timeArea}>
              {timeList.map((item, index) => (
                <TouchableOpacity
                  onPress={() => setSelectedTime(item.id)}
                  key={index}
                  style={
                    selectedTime === item.id
                      ? styles.timeButtonActive
                      : styles.timeButton
                  }>
                  <Text
                    style={
                      selectedTime === item.id
                        ? styles.timeTextActive
                        : styles.timeText
                    }>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </ScrollView>

      {!loading && selectedDate && selectedTime && (
        <TouchableOpacity
          onPress={handleReservationButton}
          style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Confirmar Reserva</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ChoosePropertyScreen from '../screens/ChoosePropertyScreen';
import LoginScreen from '../screens/LoginScreen';
import PreloadScreen from '../screens/PreloadScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default () => {
  const options = {
    headerShown: false,
  };

  const screenOptions = {
    headerStyle: {
      // backgroundColor: '#8863e6',
    },
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="PreloadScreen"
        component={PreloadScreen}
        options={options}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={options}
      />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ChoosePropertyScreen"
        component={ChoosePropertyScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

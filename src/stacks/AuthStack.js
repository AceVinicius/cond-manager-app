import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ChoosePropertyScreen from '../screens/ChoosePropertyScreen';
import LoginScreen from '../screens/LoginScreen';
import PreloadScreen from '../screens/PreloadScreen';

const Stack = createNativeStackNavigator();

export default () => {
  const options = {
    headerShown: false,
  };

  return (
    <Stack.Navigator>
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
      <Stack.Screen
        name="ChoosePropertyScreen"
        component={ChoosePropertyScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

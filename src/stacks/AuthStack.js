import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PreloadScreen from '../screens/PreloadScreen';
import LoginScreen from '../screens/LoginScreen';

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
    </Stack.Navigator>
  );
};

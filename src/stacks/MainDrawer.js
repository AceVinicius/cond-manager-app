import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BilletScreen from '../screens/BilletScreen';
import DocumentScreen from '../screens/DocumentScreen';
import DrawerLayout from '../components/DrawerLayout';
import LostAndFoundScreen from '../screens/LostAndFoundScreen';
import ReservationCreateScreen from '../screens/ReservationCreateScreen';
import ReservationMyScreen from '../screens/ReservationMyScreen';
import ReservationScreen from '../screens/ReservationScreen';
import WallScreen from '../screens/WallScreen';
import WarningCreateScreen from '../screens/WarningCreateScreen';
import WarningScreen from '../screens/WarningScreen';

const Drawer = createDrawerNavigator();

export default () => {
  const screenOptions = {
    headerShown: true,
    headerTitle: '',
    headerStyle: {
      backgroundColor: '#F5F6FA',
    },
    headerShadowVisible: false,
  };

  function getDrawerLayout(props) {
    return <DrawerLayout {...props} />;
  }

  return (
    <Drawer.Navigator
      screenOptions={screenOptions}
      drawerContent={(props) => getDrawerLayout(props)}>
      <Drawer.Screen name="WallScreen" component={WallScreen} />
      <Drawer.Screen name="DocumentScreen" component={DocumentScreen} />
      <Drawer.Screen name="ReservationScreen" component={ReservationScreen} />
      <Drawer.Screen name="WarningScreen" component={WarningScreen} />
      <Drawer.Screen name="LostAndFoundScreen" component={LostAndFoundScreen} />
      <Drawer.Screen name="BilletScreen" component={BilletScreen} />
      <Drawer.Screen
        name="ReservationCreateScreen"
        component={ReservationCreateScreen}
      />
      <Drawer.Screen
        name="ReservationMyScreen"
        component={ReservationMyScreen}
      />
      <Drawer.Screen
        name="WarningCreateScreen"
        component={WarningCreateScreen}
      />
    </Drawer.Navigator>
  );
};

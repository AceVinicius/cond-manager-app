import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BilletScreen from '../screens/BilletScreen';
import DocumentScreen from '../screens/DocumentScreen';
import DrawerLayout from '../components/DrawerLayout';
import WallScreen from '../screens/WallScreen';

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
      drawerContent={(props) => getDrawerLayout(props)}
    >
      <Drawer.Screen name="WallScreen" component={WallScreen} />
      <Drawer.Screen name="DocumentScreen" component={DocumentScreen} />
      <Drawer.Screen name="BilletScreen" component={BilletScreen} />
    </Drawer.Navigator>
  );
};

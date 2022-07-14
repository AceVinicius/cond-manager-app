import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerLayout from '../components/DrawerLayout';
import WallScreen from '../screens/WallScreen';

const Drawer = createDrawerNavigator();

function getDrawerLayout(props) {
  return <DrawerLayout {...props} />;
}

export default () => {
  return (
    <Drawer.Navigator drawerContent={(props) => getDrawerLayout(props)}>
      <Drawer.Screen name="WallScreen" component={WallScreen} />
    </Drawer.Navigator>
  );
};

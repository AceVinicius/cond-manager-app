import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {StateProvider} from './src/contexts/StateContext';

const App = () => {
  return (
    <StateProvider>
      <SafeAreaView>
        <Text>Teste</Text>
      </SafeAreaView>
    </StateProvider>
  );
};

export default App;

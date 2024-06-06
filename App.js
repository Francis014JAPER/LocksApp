// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LocksView from './src/views/LocksView';
import LockForm from './src/views/LockForm';
import LockDetail from './src/views/LockDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Locks" component={LocksView} />
        <Stack.Screen name="Add Lock" component={LockForm} />
        <Stack.Screen name="Lock Detail" component={LockDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
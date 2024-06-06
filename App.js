import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/views/HomeScreen';
import LockDetailScreen from './src/views/LockDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LockDetail" component={LockDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

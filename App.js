import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './componetnt/MainScreen';
import AddOrderScreen from './componetnt/AddOrder';

const Stack = createStackNavigator();

const App = () => {
  return (
    // use the Navigation Container to navigate between the MainScreen and AddorderedScreen for that i use Stack Navigator
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'Restaurant Ordering App' }}
        />
        <Stack.Screen
          name="AddOrderScreen"
          component={AddOrderScreen}
          options={{ title: 'Add Order' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


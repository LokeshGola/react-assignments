
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';
// import AppNavigator from '../components/AppNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="TodosScreen">
        <Stack.Screen name="TodosScreen" component={TodoList} />
        <Stack.Screen name="CreateScreen" component={CreateTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

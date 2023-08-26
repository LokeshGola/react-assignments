


import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoList from '../components/TodoList';
import CreateTodo from '../components/CreateTodo';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateScreen">
        <Stack.Screen name="TodosScreen" component={TodoList} />
        <Stack.Screen name="CreateScreen" component={CreateTodo} />
      </Stack.Navigator>
    //   </NavigationContainer>
  );
};

export default AppNavigator;

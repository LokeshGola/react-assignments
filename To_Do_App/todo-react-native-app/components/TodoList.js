import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { readTodos } from '/components/data'; // Import the readTodos function
import TodoItem from '/components/TodoItem'; // Import the TodoItem component

import { useNavigation } from '@react-navigation/native';
import  { useState, useEffect } from 'react';

const TodoList = () => {
  const navigation = useNavigation(); // Access the navigation object
  // const todos = readTodos(); // Assuming you have the readTodos function imported

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos when the component mounts
    const fetchedTodos = readTodos();
    setTodos(fetchedTodos);
  }, []); // Empty dependency array means this effect runs once on mount


  const navigateToCreateScreen = () => {
    navigation.navigate('CreateScreen'); // Navigate to CreateScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>List of Todos</Text>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <Button title="Create Todo" onPress={navigateToCreateScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TodoList;

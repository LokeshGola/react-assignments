
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createTodo } from './data';

import { useNavigation } from '@react-navigation/native';

const CreateTodo = () => {
  console.log("inside CreateTodo")

  const navigation = useNavigation(); // Access the navigation object

  const navigateToTodosScreen = () => {
    navigation.navigate('TodosScreen'); // Navigate to CreateScreen
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTodo = () => {
    console.log("inside handleCreateTodo")
    createTodo(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Create Todo" onPress={handleCreateTodo} />
      <br/>
      <Button title="Todo List" onPress={navigateToTodosScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default CreateTodo;

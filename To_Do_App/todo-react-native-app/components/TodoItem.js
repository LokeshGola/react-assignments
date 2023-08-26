
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoItem = ({ todo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.description}>{todo.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default TodoItem;

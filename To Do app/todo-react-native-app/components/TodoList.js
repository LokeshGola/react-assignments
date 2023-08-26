import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { readTodos } from '../components/data'; // Import the readTodos function
import TodoItem from '../components/TodoItem'; // Import the TodoItem component

// const TodoList = () => {
//   const todos = readTodos(); // Get the list of todos

//   return (
//     <View>
//       {todos.map(todo => (
//         <TodoItem key={todo.id} todo={todo} />
//       ))}
//     </View>
//   );
// };

// export default TodoList;


const TodoList = () => {
    const todos = readTodos(); // Assuming you have the readTodos function imported

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>List of Todos</Text>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
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

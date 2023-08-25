// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import { createTodo } from '../components/data'; // Import the createTodo function

// const CreateTodo = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleCreateTodo = () => {
//     createTodo(title, description); // Call the createTodo function
//     setTitle('');
//     setDescription('');
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Title"
//         value={title}
//         onChangeText={setTitle}
//       />
//       <TextInput
//         placeholder="Description"
//         value={description}
//         onChangeText={setDescription}
//       />
//       <Button title="Create Todo" onPress={handleCreateTodo} />
//     </View>
//   );
// };

// export default CreateTodo;


import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createTodo } from '../components/data';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTodo = () => {
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

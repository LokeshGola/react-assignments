import { View, Text } from "react-native";

// const App= ()=>{
//     return(
//         <View>
//             <Text>Hii developers!</Text>
//         </View>
//     )
// }

// export default App;


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import TodoList from '../components/TodoList';
// import CreateTodo from '../components/CreateTodo';
// import AppNavigator from '../components/AppNavigator';

// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View>
            <Text>Hii developers!</Text>
        </View>
      </NavigationContainer>
  );
};

export default App;

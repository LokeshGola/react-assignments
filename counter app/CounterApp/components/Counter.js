import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import appStyles from '../styles/appStyles';

const Counter = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Simple Counter App</Text>
      <Text style={appStyles.count}>{count}</Text>
      <TouchableOpacity onPress={handleIncrement}>
        <Text style={appStyles.button}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDecrement}>
        <Text style={appStyles.button}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

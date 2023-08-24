import React, { useState } from 'react';
import { View } from 'react-native';
import Counter from '../components/Counter';
import appStyles from '../styles/appStyles';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={appStyles.container}>
      <Counter 
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </View>
  );
};

export default App;

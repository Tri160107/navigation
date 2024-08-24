import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MarvelDetail from './MarvelDetail';
import MarvelList from './MarvelList';

const Stack = createStackNavigator();

const Marvel: React.FC = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="MarvelList" component={MarvelList} />
        <Stack.Screen name="MarvelDetail" component={MarvelDetail} />
      </Stack.Navigator>
    
  );
}

export default Marvel;
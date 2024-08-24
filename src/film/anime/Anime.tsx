import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AnimeDetail from './AnimeDetail';
import AnimeList from './AnimeList';

const Stack = createStackNavigator();

const Anime: React.FC = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="AnimeList" component={AnimeList} />
        <Stack.Screen name="AnimeDetail" component={AnimeDetail} />
      </Stack.Navigator>
    
  );
}

export default Anime;
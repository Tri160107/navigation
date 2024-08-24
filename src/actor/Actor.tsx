import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ActorDetail from './ActorDetail';
import ActorList from './ActorList';

const Stack = createStackNavigator();

const Actor: React.FC = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="ActorList" component={ActorList} />
        <Stack.Screen name="ActorDetail" component={ActorDetail} />
      </Stack.Navigator>
    
  );
}

export default Actor;

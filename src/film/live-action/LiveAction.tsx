import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LiveActionDetail from './LiveActionDetail';
import LiveActionList from './LiveActionList';

const Stack = createStackNavigator();

const LiveAction: React.FC = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="LiveActionList" component={LiveActionList} />
        <Stack.Screen name="LiveActionDetail" component={LiveActionDetail} />
      </Stack.Navigator>
    
  );
}

export default LiveAction;
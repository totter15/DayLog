import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WriteScreen from './WriteScreen';
import MainTab from './MainTab';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;

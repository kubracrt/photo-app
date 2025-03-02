import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhotosScreen from "../../screens/PhotosScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Photos">
      <Stack.Screen name="Photos" component={PhotosScreen} />
    </Stack.Navigator>

  );
}

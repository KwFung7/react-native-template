import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as NAVIGATION from '../constant/navigation';

import Home from '../container/home';

const Stack = createStackNavigator();

const Router = props => {

  console.log(NAVIGATION);

  return (
    <Stack.Navigator
      initialRouteName={NAVIGATION.SCREENS.HOME}
      presentation="card"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        gestureDirection: 'horizontal',
      })}>
      {
        <>
          <Stack.Screen
            name={NAVIGATION.SCREENS.HOME}
            component={Home}
            options={{ title: 'Home', headerShown: false }}
          />
        </>
      }
    </Stack.Navigator>
  );
};

export default Router;
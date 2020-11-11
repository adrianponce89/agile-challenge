import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import theme from '../styles/theme.style';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.PRIMARY_COLOR,
        },
        headerTintColor: theme.TEXT_LIGHT,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Details" component={Details} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;

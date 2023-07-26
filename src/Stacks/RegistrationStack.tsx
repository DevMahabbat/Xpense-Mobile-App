/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegistrationOnboardScreen from '../screens/RegistrationOnboardScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';

const RegStack = createStackNavigator();

const RegistrationStack = ({navigation}: any) => {
  //  initialRouteName = 'RegistrationOnBoardScreen'
  return (
    <RegStack.Navigator screenOptions={{
      headerStyle: { elevation: 0 },
      cardStyle: { backgroundColor: '#fff' }
    }}>
      <RegStack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{headerShown: false}}
      />
      <RegStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <RegStack.Screen
        name="RegistrationOnBoardScreen"
        component={RegistrationOnboardScreen}
        options={{headerShown: false}}
      />
    </RegStack.Navigator>
  );
};

export default RegistrationStack;

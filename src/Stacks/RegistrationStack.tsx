import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RegistrationOnboardScreen from '../screens/RegistrationOnboardScreen'
import RegistrationScreen from '../screens/RegistrationScreen'

const RegStack = createStackNavigator()


const RegistrationStack = ({navigation}:any) => {
    return (
        <RegStack.Navigator initialRouteName='RegistrationOnBoardScreen'>
            <RegStack.Screen name='RegistrationOnBoardScreen' component={RegistrationOnboardScreen} />
            <RegStack.Screen name='RegistrationScreen' component={RegistrationScreen} />
        </RegStack.Navigator>
    )
}

export default RegistrationStack
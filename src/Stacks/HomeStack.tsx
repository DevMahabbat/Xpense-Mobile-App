import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeStackScreens/HomeScreen'
import AddTransactionScreen from '../screens/HomeStackScreens/AddTransactionScreen'

const HomeStackNav = createNativeStackNavigator()

const HomeStack = ({ navigation }: any) => {
  return (
    <>
      <HomeStackNav.Navigator>
        <HomeStackNav.Screen name="AddTransactionScreen" component={AddTransactionScreen} options={{ headerShown: false }} />
        <HomeStackNav.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />

      </HomeStackNav.Navigator>
    </>
  )
}

export default HomeStack

const styles = StyleSheet.create({})
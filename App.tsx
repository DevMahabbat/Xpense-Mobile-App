import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import OnboardingScreen from './src/screens/OnboardingScreen'
import { ActivityIndicator } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/RegistrationOnboardScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RegistrationOnboardScreen from './src/screens/RegistrationOnboardScreen'

const Stack = createNativeStackNavigator();

const App = () => {


  const [isFirstTime, setFirstTime] = useState<boolean | null>(null)
  const [loading, setLoading] = useState<boolean | null>(true)

  useEffect(() => {



    AsyncStorage.getItem("isNotFirstTimeOnBoarding").then((res) => {
      if (res) {
        let data = JSON.parse(res)
        setFirstTime(data)
        
        

         

      }
      setLoading(false);
      SplashScreen.hide()
    })
   


  }, [])


 
  return (
    <NavigationContainer>
      {loading  ?  null : 
      <Stack.Navigator initialRouteName={!isFirstTime? "OnboardingScreen" : "RegistrationOnboardScreen"}>
        {!isFirstTime && (
          <Stack.Screen
            options={{ headerShown: false }}
            name="OnboardingScreen"
            component={OnboardingScreen}
          />
        )}
          <Stack.Screen name="RegistrationOnboardScreen" component={RegistrationOnboardScreen} options={{headerShown: false}} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} /> */}
      </Stack.Navigator>}
    </NavigationContainer >
  )


}

export default App

const styles = StyleSheet.create({})
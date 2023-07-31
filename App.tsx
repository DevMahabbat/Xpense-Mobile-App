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
import RegistrationStack from './src/Stacks/RegistrationStack'
import HomeTab from './src/Tabs/HomeTab'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Stack = createNativeStackNavigator();




import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
 // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: '1019847113197-ta2q02q74qgt5bk9r3li55dggruh2auq.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // hostedDomain: '', // specifies a hosted domain restriction
  // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  // accountName: '', // [Android] specifies an account name on the device that should be used
  // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

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
      {loading ? null :
        <Stack.Navigator initialRouteName={!isFirstTime ? "OnboardingScreen" : "RegistrationStack"}   >
          {!isFirstTime && (
            <Stack.Screen
              options={{ headerShown: false }}
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen name="RegistrationStack" component={RegistrationStack} options={{ headerShown: false }}/>
          <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
        
       
         
        </Stack.Navigator>}
    </NavigationContainer >
 
  )


}

export default App

const styles = StyleSheet.create({})
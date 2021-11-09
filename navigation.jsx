import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import ForgotPassword from './screens/ForgotPasswordScreeen'
const Stack=createNativeStackNavigator()
const screenOptions={
    headerShown:false
}

export const SignedInStack = () => (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='HomeScreen' 
            screenOptions={screenOptions}>
               <Stack.Screen name="HomeScreen" component={HomeScreen}/>
               <Stack.Screen name="NewPostScreen" component={NewPostScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

export const SignedOutStack=()=>(
    <NavigationContainer>
        <Stack.Navigator
         initialRouteName='SignUpScreen' 
         screenOptions={screenOptions}
        >
               <Stack.Screen name="LoginScreen" component={LoginScreen}/>
               <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
               <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword}/>
        </Stack.Navigator>
    </NavigationContainer>
)
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import LoginScreen from './screens/LoginScreen'
const Stack=createNativeStackNavigator()
const screenOptions={
    headerShown:false
}

const SignedInStack = () => (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='HomeScreen' 
            screenOptions={screenOptions}>
               <Stack.Screen name="LoginScreen" component={LoginScreen}/>
               <Stack.Screen name="HomeScreen" component={HomeScreen}/>
               <Stack.Screen name="NewPostScreen" component={NewPostScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

export default SignedInStack
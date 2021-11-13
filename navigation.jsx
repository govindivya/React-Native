import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React,{useState} from 'react'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import ForgotPassword from './screens/ForgotPasswordScreeen'
import Notifications from './screens/Notifications';
import Profile from './screens/Profile'
import Video from './screens/Video'
import Search from './screens/Search'

const Stack=createNativeStackNavigator()
const screenOptions={
    headerShown:false
}

export const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='ProfileScreen' 
            screenOptions={screenOptions}>
               <Stack.Screen name="HomeScreen" component={HomeScreen} initialParams={{currentScreen:"HomeScreen"}}/>
               <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
               <Stack.Screen name="VideoScreen" component={Video} initialParams={{currentScreen:"VideoScreen"}}/>
               <Stack.Screen name="SearchScreen" component={Search} initialParams={{currentScreen:"SearchScreen"}}/>
               <Stack.Screen name="ProfileScreen" component={Profile} initialParams={{currentScreen:"ProfileScreen"}}/>
               <Stack.Screen name="NotificationsScreen" component={Notifications} initialParams={{currentScreen:"NotificationsScreen"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

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
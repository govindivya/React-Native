import React ,{useState}from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { TextInput } from 'react-native-gesture-handler'

const LoginForm = ({navigation}) => {
    return (
        <View>
            <TextInput 
            name="username"
            placeholder="Phone number , username or email "
            placeholderTextColor="#444"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            style={{padding: 5, height:40,fontSize:18,marginBottom:10}}/>
            <TextInput
            name="password"
             placeholder="Password "
             placeholderTextColor="#444"
             autoCapitalize="none"
             keyboardType="visible-password"
             textContentType="password"
             style={{padding: 5, height:40,fontSize:18,marginBottom:10}}/>
            <Button title="Login" style={{backgroundColor:"green"}}/>
        </View>
    )
}

export default LoginForm

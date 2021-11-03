import React from 'react'
import { View, Text ,StyleSheet,Image} from 'react-native'
import LoginForm from '../components/login/LoginForm'
const logo =require('../assets/images/insta.png')

const LoginScreen = () => {
    return (
        <View style={styles.container}>
          <View style={styles.logoContainer} >
             <Image source={logo} style={styles.logo}/>
             {/* we can pass style property inside source as source={logo,height:100,width:100} */}
          </View>
          <LoginForm/>
        </View>
    )
}
const styles =StyleSheet.create({
container:{
flex:1,
backgroundColor:"white",
padding:30,
paddingHorizontal:12
},
logoContainer:{
alignItems:"center",
margin:60
},
logo:{
  width:100,
  height:100
}
})
export default LoginScreen

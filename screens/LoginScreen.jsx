import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LoginForm from "../components/login/LoginForm";
// const logo =require('../assets/images/insta.png')

const LoginScreen = ({navigation}) => {
  return (
    <View style={{width:"100%"}}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/insta.png",
          }}
          style={styles.logo}
        />
        {/* we can pass style property inside source as source={logo,height:100,width:100} */}
      </View>

      <LoginForm navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
 
  logoContainer: {
    alignItems: "center",
    marginHorizontal: 60,
    marginVertical:30

  },
  logo: {
    width: 100,
    height: 100,
  },
});
export default LoginScreen;

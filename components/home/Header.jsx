import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { getAuth } from "@firebase/auth";

const Header = ({navigation}) => {
  const auth=getAuth();
  const signedOut=()=>{
  auth.signOut().then(console.log("Signed Out")).catch(e=>console.log(e))
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signedOut}>
        <Image
          style={styles.logo}
          source={{uri:"https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/header-logo.png"}}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <Text style={{ color: "white" }}>
          {" "}
          <TouchableOpacity onPress={()=>navigation.push('NewPostScreen')}>
            <Image
              style={styles.icon}
              source={{uri:"https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/plus-2-math.png"}}
            />
          </TouchableOpacity>{" "}
        </Text>
        <Text style={{ color: "white" }}>
          {" "}
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={{uri:"https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/like--v1.png"}}
            />
          </TouchableOpacity>{" "}
        </Text>
        <Text style={{ color: "white" }}>
          {" "}
          <TouchableOpacity>
            <View style={styles.unrealBadge}>
              <Text style={styles.unrealBadgeText}>11</Text>
            </View>
            <Image
              style={styles.icon}
              source={{uri:"https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/facebook-messenger.png" }}
            />
          </TouchableOpacity>{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop:10
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconsContainer: {
    color: "white",
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unrealBadge: {
    backgroundColor: "red",
    position: "absolute",
    left:25,
    bottom:16,
    flex:1,
    borderRadius:20,
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
    padding:1,
    height:20,
    width:20,
    zIndex:100
  },
  unrealBadgeText:{
      color:"white",
      fontWeight:"600",
      margin:"auto"
  }
});

export default Header;

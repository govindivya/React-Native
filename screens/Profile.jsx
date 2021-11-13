import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Bottom from "../components/home/Bottom";
import { imageIcons } from "../components/home/Bottom";
import Header from '../components/Profile/Header'
import FriendSuggestion from "../components/Profile/FriendSuggestion";
import Posts from '../components/Profile/Posts'
import Stories from '../components/Profile/Stories'
const Profile = ({ navigation, route }) => {
  const currentScreen= route.params.currentScreen;
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" ,backgroundColor:"black"}}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <Header/>
      <Posts/>
      <Stories/>
      <FriendSuggestion/>
      </View>
      <Bottom
        imageIcons={imageIcons}
        navigation={navigation}
        currentScreen={currentScreen}
      />
    </SafeAreaView>
  );
};

export default Profile;

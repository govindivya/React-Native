import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Bottom from "../components/home/Bottom";
import { imageIcons } from "../components/home/Bottom";
import Header from "../components/Profile/Header";
import FriendSuggestion from "../components/Profile/FriendSuggestion";
import Posts from "../components/Profile/Posts";
import Stories from "../components/Profile/Stories";

const Profile = ({ navigation, route }) => {
  const currentScreen = route.params.currentScreen;
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <ScrollView navigation={navigation}>
        <Header />
        <FriendSuggestion />
        <Stories/>
      </ScrollView>

      <Bottom
        imageIcons={imageIcons}
        navigation={navigation}
        currentScreen={currentScreen}
      />
    </SafeAreaView>
  );
};

export default Profile;

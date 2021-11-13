import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Bottom from "../components/home/Bottom";
import { imageIcons } from "../components/home/Bottom";

const Search = ({ navigation, route }) => {
  const currentScreen=route.params.currentScreen;
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Search</Text>
      </View>
      <Bottom
        imageIcons={imageIcons}
        navigation={navigation}
        currentScreen={currentScreen}
      />
    </SafeAreaView>
  );
};

export default Search;

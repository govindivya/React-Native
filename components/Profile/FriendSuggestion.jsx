import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { User } from "../../data/Users";

const CardBox = ({ name, image, description }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 220,
        height: 220,
        borderColor: "gray",
        borderWidth: 1,
        margin:15,
        shadowColor:"lightgray",
        shadowOffset:10,
        shadowOpacity:1
      }}
    >
      <Image
        style={{
          width: 80,
          height: 80,
          marginHorizontal: 10,
          borderRadius: 40,
        }}
        source={{
          uri: User[0].url,
        }}
      />
      <Text style={{ color: "white", marginBottom: 5 }}>Shivam Kumar</Text>
      <Text style={{ color: "white", marginBottom: 5 ,fontSize:14}}>followed by </Text>
      <Text style={{ color: "white", marginBottom: 5 ,fontSize:14}}>Ritu and ..+100</Text>
      <TouchableOpacity
        style={{
          width: 100,
          height: 30,
          borderColor: "gray",
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"blue"
        }}
      >
        <Text style={{ color: "white", fontSize: 12, fontWeight: 500 }}>
          Add Friend
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const FriendSuggestion = ({ FriendSuggested }) => {
  return (
      <View style={{width:"100%"}}>
          <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"white",fontSize:18,color:"green",fontWeight:700}}>Suggested Friends</Text>
          </View>
      <View
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CardBox />
          <CardBox />
          <CardBox />
        </ScrollView>
      </View>
    </View>
  );
};
export default FriendSuggestion;

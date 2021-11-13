import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { User } from "../../data/Users";

const Header = ({ navigation }) => {
  console.log(User);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        position:"relative"
      }}
    >
      <View
        style={{
          height: 50,
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 10,
         
        }}
      >
        <Text style={{ color: "white", fontSize: 22 }}>govindivya8081</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 35, height: 35 }}
              source={{
                uri: "https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/plus-2-math.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 35, height: 35, marginHorizontal: 10 }}
              source={{
                uri: "https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/hamburger.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 0.1,
          backgroundColor: "#515252",
          marginVertical: 5,
          
        }}
      ></View>
      <View
        style={{
          height: 100,
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
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
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 15, color: "white", marginBottom: 3 }}>
                2
              </Text>
              <Text style={{ fontSize: 15, color: "white" }}>Posts</Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 15, color: "white", marginBottom: 3 }}>
                100
              </Text>
              <Text style={{ fontSize: 15, color: "white" }}>Followers</Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 15, color: "white", marginBottom: 3 }}>
                190
              </Text>
              <Text style={{ fontSize: 15, color: "white" }}>Following</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            color: "white",
            marginLeft: 10,
            fontSize: 15,
            marginBottom: 5,
            fontWeight: 600,
          }}
        >
          Govind Kumar Kushwaha
        </Text>
        <Text
          style={{
            color: "white",
            marginLeft: 10,
            fontSize: 13,
            marginBottom: 5,
          }}
        >
          Student at NIT Patna
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 60,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <TouchableOpacity
          style={{
            width: "80%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            borderWidth: 1,
            borderColor: "gray",
          }}
        >
          <Text style={{ color: "blue", fontSize: 18, fontWeight: 700 }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

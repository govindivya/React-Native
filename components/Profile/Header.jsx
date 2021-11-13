import React from "react";
import { View, Text, Image } from "react-native";
import User from "../../data/Users";
const header = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          height: 50,
          width: "100%",
          justifyContent:"space-between",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 22 }}>govindivya8081</Text>
        <View style={{flexDirection: "row",}}>
        <Image
          style={{ width: 35, height: 35}}
          source={{
            uri: "https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/plus-2-math.png",
          }}
        />
         <Image
        style={{ width: 35, height: 35 }}
        source={{
          uri: "https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/plus-2-math.png",
        }}
      />
        </View>
      </View>
    </View>
  );
};

export default header;

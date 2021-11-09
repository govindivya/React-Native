import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
export const imageIcons = [
  {
    name: "Home",
    active:"https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/home.png",
    inactive: "https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/home1.png"
  },
  {
    name: "Search",
    active:"https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/search--v1.png",
    inactive: "https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/search--v1 (1).png"
  },
  {
    name: "Reels",
    active:"https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/instagram-reel.png",
    inactive: "https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/videobox.png"
  },
  {
    name: "Notification",
    active:"https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/heart.png",
    inactive: "https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/like--v1.png"
  },
  {
    name: "Profile",
    active:"https://raw.githubusercontent.com/govindivya/React-Native/master/data/Images/user1.jpeg",
    inactive:"https://raw.githubusercontent.com/govindivya/React-Native/master/data/Images/user1.jpeg"
  },
];

const Icons = ({ item, active, setActive }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setActive(item.name);
      }}
    >
      <Image
        source={{uri:(item.name === active ? item.active : item.inactive)}}
        style={
          item.name === "Profile"
            ? active === item.name
              ? [styles.imageicon, styles.active]
              : [styles.imageicon, styles.profilePic]
            : styles.imageicon
        }
      />
    </TouchableOpacity>
  );
};

const Bottom = ({ imageIcons }) => {
  const [active, setActive] = useState("Home");
  return (
    <View style={styles.bottom}>
      <Divider
        width={1}
        style={{ backgroundColor: "#4e4e4e", marginBottom: 10, width: "100%" }}
      />
      <View style={styles.imagecontainer}>
        {imageIcons.map((item, index) => (
          <Icons item={item} active={active} setActive={setActive} key={index} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    position:"absolute",
    bottom: 0,
    zIndex: 999,
    backgroundColor: "black",
    width: "100%",
    height: 50,
  },
  imagecontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageicon: {
    height: 30,
    width: 30,
    borderRadius:15,
  },
  profilePic: {
    borderWidth: 2,
    borderColor: "white",
  },
  active: {
    borderWidth: 2,
    borderColor: "orange",
  },
});

export default Bottom;

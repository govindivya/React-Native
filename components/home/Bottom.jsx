import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
export const imageIcons = [
  {
    name: "Home",
    active: require("../../assets/images/home.png"),
    inactive: require("../../assets/images/home1.png"),
  },
  {
    name: "Search",
    active: require("../../assets/images/search--v1.png"),
    inactive: require("../../assets/images/search--v1 (1).png"),
  },
  {
    name: "Reels",
    active: require("../../assets/images/instagram-reel.png"),
    inactive: require("../../assets/images/videobox.png"),
  },
  {
    name: "Notification",
    inactive: require("../../assets/images/like--v1.png"),
    active: require("../../assets/images/heart.png"),
  },
  {
    name: "Profile",
    active: require("../../data/Images/user1.jpeg"),
    inactive: require("../../data/Images/user1.jpeg"),
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
        source={item.name === active ? item.active : item.inactive}
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
          <Icons item={item} active={active} setActive={setActive} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    position: "fixed",
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
    borderRadius: "50%",
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

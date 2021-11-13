import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { User } from "../../data/Users";

const Stories = () => {
  return (
    <View
      style={{
        marginBottom: 13,
        width: "100%",
        marginBottom: 60,
        position: "relative",
        flexDirection: "row",
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderColor: "#ff8501",
            justifyContent: "center",
            alignItems: "center",
            borderWidth:3,
          }}
        >
          <Text style={{ color: "white" }}>+</Text>
        </View>
        {User.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.url }} style={styles.story} />
            <Text style={{ color: "white" }}>
              {story.user.length > 11
                ? story.user.slice(0, 10) + "..."
                : story.user}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 3,
    resizeMode: "cover",
    borderColor: "#ff8501",
  },
});
export default Stories;

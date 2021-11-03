import React from "react";
import { Text, SafeAreaView, View, StyleSheet ,ScrollView} from "react-native";
import Bottom from "../components/home/Bottom";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { PostData } from "../data/PostData";
import { imageIcons }  from "../components/home/Bottom";

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <Header navigation={navigation}/>
      <Stories/>
     <ScrollView>
       {
         PostData.map((item,index)=>(<Post key={index} post={item}/>))
       }
    </ScrollView>   
    <Bottom imageIcons={imageIcons}/>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  logo: {},
});
export default HomeScreen;

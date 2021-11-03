import React from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, SegmentedControlIOSBase } from "react-native";
import back from "../../assets/images/back.png";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost=({navigation})=>{
    return <View style={styles.container}>
        <Header navigation={navigation}/>
        <FormikPostUploader navigation={navigation}/>
    </View>
}

const Header = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
     <TouchableOpacity onPress={()=>navigation.push('HomeScreen')}>
     <Image source={back} style={styles.backimage} />
     </TouchableOpacity>
      <Text style={{color:"white",fontWeight:700,fontSize:16,marginRight:30}}>New Post</Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical:10
  },
  backimage: {
    width: 25,
    height: 25,
    margin:5
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default AddNewPost;

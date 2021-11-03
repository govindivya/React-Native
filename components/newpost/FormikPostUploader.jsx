import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet,} from "react-native";
import * as yup from "yup";
import {Divider} from 'react-native-elements'
import { Formik, formik } from "formik";
import { values } from "lodash";
import { Button } from "react-native-elements/dist/buttons/Button";
import validUrl from 'valid-url'

const PLACEHOLDER_IMG = require("../../assets/images/thumbnail.jfif");

const uploadPostSchema = yup.object().shape({
  imageUrl: yup.string().url().required("A url is required"),
  caption: yup.string().max(2200, "Caption has reached to it's limit"),
});

const FormikPostUploader = ({navigation}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [captionText,setCaptionText]=useState("");
  
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {console.log(values);navigation.goBack()}}
      validationSchema={uploadPostSchema}
      validateOnChange={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image source={thumbnailUrl ? validUrl.isUri(thumbnailUrl) :PLACEHOLDER_IMG} style={styles.image} />
            <TextInput
              placeholder="write a caption"
              placeholderTextColor="gray"
              multiline={true}
              style={styles.inputs}
              onChangeText={handleChange("caption")}
              onBlur={handleBlur("caption")}
              value={values.caption}
              onChange={(e)=>{setCaptionText(e.nativeEvent.text)}}
            />
          </View>
          <TextInput
            placeholder="Enter image url"
            placeholderTextColor="gray"
            style={styles.inputs}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
            onChange={(e)=>{setThumbnailUrl(e.nativeEvent.text)}}
          />
          {
              errors.imageUrl && (
                  <Text style={{color:"red",fontSize:16}}>
                      {
                         errors.imageUrl
                      }
                  </Text>
              )
          }
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} style={styles.button}/>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  button:{
  backgroundColor:"green",
  marginTop:20,
  fontSize:18
  },
  image: {
    width: 100,
    height: 100,
    borderColor:"orange",
    borderWidth:2
  },
  inputs: {
    color: "white",
    margin:5,
    fontSize: 16,
    padding:5,
    flex:1,
  },
});
export default FormikPostUploader;

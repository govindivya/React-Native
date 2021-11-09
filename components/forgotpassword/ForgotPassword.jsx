import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { TextInput } from "react-native-gesture-handler";
import { Formik } from "formik";
import * as Yup from "yup";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email().required("A valid email is required !"),
  });
 
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={ForgotPasswordSchema}
        validateOnMount={true}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 20,
                color: "gray",
              }}
            >
              Forgot Password
            </Text>
            <TextInput
              name="username"
              placeholder="Phone number , username or email "
              placeholderTextColor="#444"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              style={styles.inputField}
              value={values.email}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            {errors.email && (values.email.length>=1) && (
              <Text style={{ color: "red", fontSize: 16 }}>This is not  a valid email !</Text>
            )}
            <Pressable
              style={[styles.button, isValid ? styles.btngreen : styles.btnlightgreen ]}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={{ fontSize: 18, color: "white" }}>
                Password Reset
              </Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.btnblue, styles.btnMarginTop]}
              onPress={() => navigation.push("LoginScreen")}
            >
              <Text style={{ fontSize: 18, color: "white" }}>Login now</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.btnblue]}
              onPress={() => navigation.push("SignUpScreen")}
            >
              <Text style={{ fontSize: 18, color: "white" }}>
                Not registred yet? Sign Up
              </Text>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  inputField: {
    padding: 10,
    height: 50,
    fontSize: 18,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    width: "100%",
    maxWidth: 600,
  },
  btngreen:{
    backgroundColor:"green"
  },
  btnlightgreen:{
  backgroundColor:"lightgreen"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 5,
    width: "100%",
    height: 50,
    marginBottom: 10,
    fontSize: 18,
    maxWidth: 600,
  },
  btnblue: {
    backgroundColor: "blue",
  },
  btnMarginTop: {
    marginTop: 50,
  },
});

export default ForgotPassword;

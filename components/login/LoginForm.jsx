import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Formik } from "formik";
import * as Yup from "yup";
// Import the functions you need from the SDKs you need
import { app, db } from "../../firebase.config";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("A valid email is required !"),
    password: Yup.string()
      .required()
      .min(6, "Your password should have atleast 6 characters !"),
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const onLogin = async (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((e) => {
        console.log(e.message);
        Alert.alert("User not found 😌", "\nWhat do you like to do next ?", [
          {
            text: "Try again",
            onPress: () => {
              console.log("try again");
            },
            style: "cancel",
          },
          {
            text: "sign up now",
            onPress: () => {
              navigation.push("SignUpScreen");
            },
            style: "default",
          },
          {
            text: "Reset password",
            onPress: () => {
              navigation.push("ForgotPasswordScreen");
            },
            style: "default",
          },
        ]);
      });
  };
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
      <Text
        style={{
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 20,
          color: "gray",
        }}
      >
        Login here
      </Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onLogin(values.email.toString(), values.password.toString());
        }}
        validationSchema={LoginFormSchema}
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
            {errors.email && values.email.length >= 1 && (
              <Text style={{ color: "red", fontSize: 16 }}>
                This is not a valid email !
              </Text>
            )}
            <TextInput
              name="password"
              placeholder="Password "
              placeholderTextColor="#444"
              autoCapitalize="none"
              keyboardType="visible-password"
              textContentType="password"
              style={styles.inputField}
              value={values.password}
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            {errors.password && values.password.length > 1 && (
              <Text style={{ color: "red", fontSize: 16, marginBottom: 5 }}>
                {errors.password}
              </Text>
            )}
            <Pressable
              style={[
                styles.button,
                isValid ? styles.green : styles.lightgreen,
              ]}
              disabled={!isValid}
              onPress={handleSubmit}
            >
              <Text style={{ fontSize: 18, color: "white" }}>Login</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.btnblue, styles.btnMarginTop]}
              onPress={() => navigation.push("ForgotPasswordScreen")}
            >
              <Text style={{ fontSize: 18, color: "white" }}>
                Forgot Password ? Reset here
              </Text>
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
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    width: "100%",
    maxWidth: 600,
    marginVertical: 3,
  },
  green: {
    backgroundColor: "green",
  },
  lightgreen: {
    backgroundColor: "lightgreen",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 5,
    width: "100%",
    height: 50,
    fontSize: 18,
    maxWidth: 600,
    marginVertical: 5,
  },
  btnblue: {
    backgroundColor: "blue",
  },
  btnMarginTop: {
    marginTop: 50,
  },
});

export default LoginForm;
